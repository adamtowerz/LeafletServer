"""
Schema for Notebooks
"""

import ast
import graphene
from graphene_django.types import DjangoObjectType
from LeafletServer.notebooks.models import Notebook
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

class Query(graphene.AbstractType):
    """
    Notebook Query
    """
    notebook = graphene.Field(NotebookType, id=graphene.Int(),
                              title=graphene.String())
    notebooks = graphene.List(NotebookType)

    def resolve_notebook(self, args, context, info): #pylint: disable=no-self-use,unused-argument
        """
        Returns Single Notebook
        """
        return auth_filter.resolve_model(args, context, Notebook)

    def resolve_notebooks(self, args, context, info): #pylint: disable=no-self-use,unused-argument
        """
        Returns list of Notebooks
        """
        return auth_filter.resolve_models(context, Notebook)

class CreateNotebook(graphene.Mutation):
    """
    Notebook Creation Mutation
    """
    class Input:
        """
        Input Class
        """
        title = graphene.String(required=True)
        sharing = graphene.String()

    notebook = graphene.Field(lambda: NotebookType)

    @staticmethod
    def mutate(root, args, context, info):
        """
        Create and return Notebook
        """
        notebook = Notebook(owner=context.user)
        notebook.title = args.get('title')
        if args.get('sharing') is not None:
            notebook.sharing = ast.literal_eval(args.get('sharing'))
        notebook.save()
        return CreateNotebook(notebook=notebook)

class EditNotebook(graphene.Mutation):
    """
    Notebook Edit Mutation
    """
    class Input:
        """
        Input Class
        """
        id = graphene.Int()
        title = graphene.String()
        sharing = graphene.String()

    notebook = graphene.Field(lambda: NotebookType)

    @staticmethod
    def mutate(root, args, context, info):
        """
        Edit and return Notebook
        """
        notebook = auth_filter.resolve_model(args, context, Notebook)
        if notebook is None:
            return None
        if args.get('title') is not None:
            notebook.title = args.get('title')
        if args.get('sharing') is not None:
            notebook.sharing = ast.literal_eval(args.get('sharing'))
        notebook.save()
        return CreateNotebook(notebook=notebook)

class Mutation(graphene.AbstractType):
    """
    Notebook Mutations
    """
    create_notebook = CreateNotebook.Field()
    edit_notebook = EditNotebook.Field()
