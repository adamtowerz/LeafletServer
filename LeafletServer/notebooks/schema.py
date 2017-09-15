"""
Schema for Notebooks
"""

import graphene
from graphene_django.types import DjangoObjectType
from LeafletServer.notebooks.models import Notebook
from LeafletServer.sections.schema import SectionInput, save_section
from LeafletServer import auth_filter

class NotebookType(DjangoObjectType):
    """
    Class for NotebookType
    """
    class Meta:
        """
        Meta class for NotebookType
        """
        model = Notebook

class Query(object):
    """
    Notebook Query
    """
    notebook = graphene.Field(NotebookType, id=graphene.Int(),
                              title=graphene.String())
    notebooks = graphene.List(NotebookType)

    def resolve_notebook(self, info, id, title): #pylint: disable=no-self-use,unused-argument,redefined-builtin
        """
        Returns Single Notebook
        """
        return auth_filter.resolve_model(info, id, title, Notebook)

    def resolve_notebooks(self, info): #pylint: disable=no-self-use,unused-argument
        """
        Returns list of Notebooks
        """
        return auth_filter.resolve_models(info, Notebook)

class CreateNotebook(graphene.Mutation):
    """
    Notebook Creation Mutation
    """
    class Arguments:
        """
        Input Class
        """
        title = graphene.String(required=True)
        #sharing = graphene.String()
        color = graphene.String()
        location = graphene.Int()
        favorite = graphene.Boolean()
        section = SectionInput()

    notebook = graphene.Field(lambda: NotebookType)

    @staticmethod
    def mutate(root, info, title, color="", location="", favorite="False", #pylint:disable=unused-argument, too-many-arguments
               section=None):
        """
        Create and return Notebook
        """
        notebook = Notebook(owner=info.context.user)
        notebook.title = title
        if notebook.color is not None:
            notebook.color = color
        if notebook.location is not None:
            notebook.location = location
        if notebook.favorite is not None:
            notebook.favorite = favorite
        notebook.last_edited_by = info.context.user
        #if sharing is not None:
        #    notebook.sharing = ast.literal_eval(args.get('sharing'))
        notebook.save()
        print(notebook)

        if isinstance(section, dict):
            save_section(info, notebook, section.title, section.favorite,
                         section.leaflet)

        return CreateNotebook(notebook=notebook)

"""
class EditNotebook(graphene.Mutation):
    #Notebook Edit Mutation
    class Input:
        #Input Class
        id = graphene.Int()
        title = graphene.String()
        sharing = graphene.String()

    notebook = graphene.Field(lambda: NotebookType)

    @staticmethod
    def mutate(root, args, context, info):
        #Edit and return Notebook
        notebook = auth_filter.resolve_model(args, context, Notebook)
        if notebook is None:
            return None
        if args.get('title') is not None:
            notebook.title = args.get('title')
        if args.get('sharing') is not None:
            notebook.sharing = ast.literal_eval(args.get('sharing'))
        notebook.save()
        return CreateNotebook(notebook=notebook)
"""

class Mutation(object):
    """
    Notebook Mutations
    """
    create_notebook = CreateNotebook.Field()
    #edit_notebook = EditNotebook.Field()
