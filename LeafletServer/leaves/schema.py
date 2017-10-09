"""
Schema for Leaves
"""

import graphene
from graphene_django.types import DjangoObjectType
from LeafletServer.leaves.models import Leaf
from LeafletServer.leaflets.models import Leaflet
from LeafletServer import helpers

class LeafType(DjangoObjectType):
    """
    Class for LeafType
    """
    class Meta:
        """
        Meta class for LeafType
        """
        model = Leaf

class Query(object):
    """
    Leaf Query
    """
    leaf = graphene.Field(LeafType, id=graphene.Int(),
                          title=graphene.String())
    leaves = graphene.List(LeafType)

    def resolve_leaf(self, info, id=None, title=None): #pylint: disable=no-self-use,unused-argument,redefined-builtin
        """
        Returns Single Leaf
        """
        return helpers.resolve_model(info, id, title, Leaf)

    def resolve_leaves(self, info): #pylint: disable=no-self-use,unused-argument
        """
        Returns list of Leaves
        """
        return helpers.resolve_models(info, Leaf)

class LeafInput(graphene.InputObjectType):
    """
    Leaf Input
    """
    title = graphene.String(required=True)
    leaf_type = graphene.String(required=True)
    content = graphene.JSONString()

def save_leaf(info, leaflet, title, content, leaf_type='text'):
    """
    Saves Leaf
    """
    leaf = Leaf(owner=info.context.user)
    leaf.leaflet = leaflet
    leaf.title = title
    leaf.leaf_type = leaf_type
    leaf.content = content
    leaf.save()

    print(leaf)

    return leaf

class CreateLeaf(graphene.Mutation):
    """
    Leaf Creation Mutation
    """
    class Arguments:
        """
        Input Class
        """
        leaflet_id = graphene.Int(required=True)
        title = graphene.String(required=True)
        leaf_type = graphene.String(required=True)
        content = graphene.JSONString()

    leaf = graphene.Field(lambda: LeafType)
    ok = graphene.Boolean()

    @staticmethod
    def mutate(root, info, leaflet_id, title, leaf_type, content="", leaf=None): #pylint:disable=unused-argument, too-many-arguments
        """
        Create and return Leaf
        """
        leaflet = helpers.resolve_model(info, leaflet_id, None, Leaflet)
        if leaflet is None:
            return None
        ok = True

        return CreateLeaf(leaf=save_leaf(info, leaflet, title, content,
                                         leaf_type), ok=ok)

class EditLeafTitle(graphene.Mutation):
    """
    Mutation for editing Leaf Title
    """
    class Arguments:
        """
        Input Class
        """
        title = graphene.String(required=True)
        id = graphene.Int(required=True)

    leaf = graphene.Field(lambda: LeafType)
    ok = graphene.Boolean()

    @staticmethod
    def mutate(root, info, title, id): #pylint:disable=unused-argument, too-many-arguments, redefined-builtin
        """
        Mutate Leaf
        """
        leaf = helpers.mutate_model(info, id, Leaf, title, "title")
        ok = True

        return EditLeafTitle(leaf=leaf, ok=ok)

class EditLeafType(graphene.Mutation):
    """
    Mutation for editing Leaf Type
    """
    class Arguments:
        """
        Input Class
        """
        type = graphene.String(required=True)
        id = graphene.Int(required=True)

    leaf = graphene.Field(lambda: LeafType)
    ok = graphene.Boolean()

    @staticmethod
    def mutate(root, info, type, id): #pylint:disable=unused-argument, too-many-arguments, redefined-builtin
        """
        Mutate Leaf
        """
        leaf = helpers.mutate_model(info, id, Leaf, type, "type")
        ok = True

        return EditLeafTitle(leaf=leaf, ok=ok)

class EditLeafContent(graphene.Mutation):
    """
    Mutation for editing Leaf Content
    """
    class Arguments:
        """
        Input Class
        """
        content = graphene.JSONString(required=True)
        id = graphene.Int(required=True)

    leaf = graphene.Field(lambda: LeafType)
    ok = graphene.Boolean()

    @staticmethod
    def mutate(root, info, content, id): #pylint:disable=unused-argument, too-many-arguments, redefined-builtin
        """
        Mutate Leaf
        """
        leaf = helpers.mutate_model(info, id, Leaf, content, "content")
        ok = True

        return EditLeafTitle(leaf=leaf, ok=ok)

class DeleteLeaf(graphene.Mutation):
    """
    Mutation for deleting a Leaf
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
        Mutate Leaf
        """
        delete = helpers.delete_model(info, id, Leaf)

        return DeleteLeaf(ok=delete) #pylint:disable=no-value-for-parameter

class Mutation(object):
    """
    Leaf Mutations
    """
    create_leaf = CreateLeaf.Field()
    edit_leaf_title = EditLeafTitle.Field()
    edit_leaf_type = EditLeafType.Field()
    edit_leaf_content = EditLeafContent.Field()
    delete_leaf = DeleteLeaf.Field()
