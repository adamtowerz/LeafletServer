"""
Schema for Notebooks
"""

import graphene
from graphene_django.types import DjangoObjectType
from LeafletServer.notebooks.models import Notebook
from LeafletServer.notebooks.serializers import NotebookSerializer
from LeafletServer import auth_filter
from graphene_django.rest_framework.mutation import SerializerMutation

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
                              name=graphene.String())
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

class NotebookMutation(SerializerMutation):
    """
    Notebook Serializer Mutation
    """
    class Meta:
        """
        Meta Class
        """
        serializer_class = NotebookSerializer

class Mutation(graphene.ObjectType):
    """
    Notebook Mutation
    """
    edit_notebook = NotebookMutation.Field()
