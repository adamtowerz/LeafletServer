"""
Schema for Sections
"""

import graphene
from graphene_django.types import DjangoObjectType
from LeafletServer.notebooks.models import Notebook
from LeafletServer.sections.models import Section
from LeafletServer.leaflets.schema import LeafletInput, save_leaflet
from LeafletServer import auth_filter

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

    def resolve_section(self, info, id, title): #pylint: disable=no-self-use,unused-argument,redefined-builtin
        """
        Returns Single Section
        """
        return auth_filter.resolve_model(info, id, title, Section)

    def resolve_sections(self, info): #pylint: disable=no-self-use,unused-argument
        """
        Returns list of Sections
        """
        return auth_filter.resolve_models(info, Section)

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
        notebook_id = graphene.Int()
        title = graphene.String(required=True)
        favorite = graphene.Boolean()
        leaflet = LeafletInput()

    section = graphene.Field(lambda: SectionType)

    @staticmethod
    def mutate(root, info, title, notebook_id=None, favorite=False, #pylint: disable=unused-argument, too-many-arguments
               leaflet=None):
        """
        Create and return Section
        """
        if notebook_id is not None:
            notebook = Notebook.objects.get(id=notebook_id)
            return CreateSection(section=save_section(info, notebook, title,
                                                      favorite, leaflet))
        return None


class Mutation(object):
    """
    Section Mutations
    """
    create_section = CreateSection.Field()
    #edit_notebook = EditNotebook.Field()
