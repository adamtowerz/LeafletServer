"""
Schema for Sections
"""

import graphene
from graphene_django.types import DjangoObjectType
from LeafletServer.notebooks.models import Notebook
from LeafletServer.sections.models import Section
from LeafletServer.leaflets.schema import LeafletInput, save_leaflet
from LeafletServer import helpers

class SectionType(DjangoObjectType):
    """
    Class for SectionType
    """
    class Meta:
        """
        Meta class for SectionType
        """
        model = Section

class Query(object):
    """
    Section Query
    """
    section = graphene.Field(SectionType, id=graphene.Int(),
                             title=graphene.String())
    sections = graphene.List(SectionType)

    def resolve_section(self, info, id=None, title=None): #pylint: disable=no-self-use,unused-argument,redefined-builtin
        """
        Returns Single Section
        """
        return helpers.resolve_model(info, id, title, Section)

    def resolve_sections(self, info): #pylint: disable=no-self-use,unused-argument
        """
        Returns list of Sections
        """
        return helpers.resolve_models(info, Section)

class SectionInput(graphene.InputObjectType):
    """
    Section Input
    """
    title = graphene.String(required=True)
    favorite = graphene.Boolean()
    leaflet = LeafletInput()

def save_section(info, notebook, title, favorite=False, leaflet=None):
    """
    Saves Section
    """
    section = Section(owner=info.context.user)
    section.notebook = notebook
    section.title = title
    section.favorite = favorite
    section.save()

    if isinstance(leaflet, dict):
        save_leaflet(info, section, title, favorite, leaflet.leaf)

    print(section)

    return section

class CreateSection(graphene.Mutation):
    """
    Section Creation Mutation
    """
    class Arguments:
        """
        Input Class
        """
        notebook_id = graphene.Int(required=True)
        title = graphene.String(required=True)
        favorite = graphene.Boolean()
        leaflet = LeafletInput()

    section = graphene.Field(lambda: SectionType)
    ok = graphene.Boolean()

    @staticmethod
    def mutate(root, info, notebook_id, title, favorite=False, leaflet=None): #pylint: disable=unused-argument, too-many-arguments
        """
        Create and return Section
        """
        notebook = helpers.resolve_model(info, notebook_id, None, Notebook)
        if notebook is None:
            return None
        ok = True

        return CreateSection(section=save_section(info, notebook, title,
                                                  favorite, leaflet), ok=ok)

class EditSectionTitle(graphene.Mutation):
    """
    Mutation for editing Section Title
    """
    class Arguments:
        """
        Input Class
        """
        title = graphene.String(required=True)
        id = graphene.Int(required=True)

    section = graphene.Field(lambda: SectionType)
    ok = graphene.Boolean()

    @staticmethod
    def mutate(root, info, title, id): #pylint:disable=unused-argument, too-many-arguments, redefined-builtin
        """
        Mutate Section
        """
        section = helpers.mutate_model(info, id, Section, title, "title")
        ok = True

        return EditSectionTitle(section=section, ok=ok)

class EditSectionFavorite(graphene.Mutation):
    """
    Mutation for editing Section Favorite
    """
    class Arguments:
        """
        Input Class
        """
        favorite = graphene.Boolean(required=True)
        id = graphene.Int(required=True)

    section = graphene.Field(lambda: SectionType)
    ok = graphene.Boolean()

    @staticmethod
    def mutate(root, info, favorite, id): #pylint:disable=unused-argument, too-many-arguments, redefined-builtin
        """
        Mutate Section
        """
        section = helpers.mutate_model(info, id, Section, favorite, "favorite")
        ok = True

        return EditSectionFavorite(section=section, ok=ok)

class DeleteSection(graphene.Mutation):
    """
    Mutation for deleting a Section
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
        Mutate Section
        """
        delete = helpers.delete_model(info, id, Section)

        return DeleteSection(ok=delete) #pylint:disable=no-value-for-parameter

class Mutation(object):
    """
    Section Mutations
    """
    create_section = CreateSection.Field()
    edit_section_title = EditSectionTitle.Field()
    edit_section_favorite = EditSectionFavorite.Field()
    delete_section = DeleteSection.Field()
