"""
Schema for Leaflets
"""

import graphene
from graphene_django.types import DjangoObjectType
from LeafletServer.leaflets.models import Leaflet
from LeafletServer.sections.models import Section
from LeafletServer.leaves.schema import LeafInput, save_leaf
from LeafletServer import auth_filter, helpers

class LeafletType(DjangoObjectType):
    """
    Class for LeafletType
    """
    class Meta:
        """
        Meta class for LeafletType
        """
        model = Leaflet

class Query(object):
    """
    Leaflet Query
    """
    leaflet = graphene.Field(LeafletType, id=graphene.Int(),
                             title=graphene.String())
    leaflets = graphene.List(LeafletType)

    def resolve_leaflet(self, info, id=None, title=None): #pylint: disable=no-self-use,unused-argument,redefined-builtin
        """
        Returns Single Leaflet
        """
        return auth_filter.resolve_model(info, id, title, Leaflet)

    def resolve_leaflets(self, info): #pylint: disable=no-self-use,unused-argument
        """
        Returns list of Leaflets
        """
        return auth_filter.resolve_models(info, Leaflet)

class LeafletInput(graphene.InputObjectType):
    """
    Leaflet Input
    """
    title = graphene.String(required=True)
    favorite = graphene.Boolean()
    leaf = LeafInput()

def save_leaflet(info, section, title, favorite=False, leaf=None):
    """
    Saves Leaflet
    """
    leaflet = Leaflet(owner=info.context.user)
    leaflet.section = section
    leaflet.title = title
    leaflet.favorite = favorite
    leaflet.save()

    if isinstance(leaf, dict):
        save_leaf(info, leaflet, leaf.title, leaf.content, leaf.leaf_type)

    print(leaflet)

    return leaflet

class CreateLeaflet(graphene.Mutation):
    """
    Leaflet Creation Mutation
    """
    class Arguments:
        """
        Input Class
        """
        section_id = graphene.Int(required=True)
        title = graphene.String(required=True)
        favorite = graphene.Boolean()
        leaf = LeafInput()

    leaflet = graphene.Field(lambda: LeafletType)

    @staticmethod
    def mutate(root, info, title, section_id, favorite=False, leaf=None): #pylint: disable=unused-argument, too-many-arguments
        """
        Create and return Leaflet
        """
        section = auth_filter.resolve_model(info, id, None, Section)
        if section is None:
            return None
        return CreateLeaflet(leaflet=save_leaflet(info, section, title,
                                                  favorite, leaf))

class EditLeafletTitle(graphene.Mutation):
    """
    Mutation for editing Leaflet Title
    """
    class Arguments:
        """
        Input Class
        """
        title = graphene.String(required=True)
        id = graphene.Int(required=True)

    leaflet = graphene.Field(lambda: LeafletType)
    ok = graphene.Boolean()

    @staticmethod
    def mutate(root, info, title, id): #pylint:disable=unused-argument, too-many-arguments, redefined-builtin
        """
        Mutate Leaflet
        """
        leaflet = helpers.mutate_model(info, id, Leaflet, title, "title")
        ok = True

        return EditLeafletTitle(leaflet=leaflet, ok=ok)

class EditLeafletFavorite(graphene.Mutation):
    """
    Mutation for editing Leaflet Favorite
    """
    class Arguments:
        """
        Input Class
        """
        favorite = graphene.Boolean(required=True)
        id = graphene.Int(required=True)

    leaflet = graphene.Field(lambda: LeafletType)
    ok = graphene.Boolean()

    @staticmethod
    def mutate(root, info, favorite, id): #pylint:disable=unused-argument, too-many-arguments, redefined-builtin
        """
        Mutate Leaflet
        """
        leaflet = helpers.mutate_model(info, id, Leaflet, favorite, "favorite")
        ok = True

        return EditLeafletFavorite(leaflet=leaflet, ok=ok)

class DeleteLeaflet(graphene.Mutation):
    """
    Mutation for deleting a Leaflet
    """

    class Arguments:
        """
        Input Class
        """
        id = graphene.Int(required=True)

    ok = graphene.Boolean()

    @staticmethod
    def mutate(root, info, id): #pylint:disable=unused-argument, too-many-arguments, redefined-builtin
        """
        Mutate Leaflet
        """
        delete = helpers.delete_model(info, id, Leaflet)

        return DeleteLeaflet(ok=delete) #pylint:disable=no-value-for-parameter

class Mutation(object):
    """
    Leaflet Mutations
    """
    create_leaflet = CreateLeaflet.Field()
    edit_leaflet_title = EditLeafletTitle.Field()
    edit_leaflet_favorite = EditLeafletFavorite.Field()
    delete_leaflet = DeleteLeaflet.Field()
