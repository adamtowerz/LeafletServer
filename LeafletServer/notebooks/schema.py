"""
Schema for Notebooks
"""

from graphene import AbstractType, Node
from graphene_django.filter import DjangoFilterConnectionField
from graphene_django.types import DjangoObjectType
from LeafletServer.notebooks.models import Notebook
from LeafletServer import auth_filter

class NotebookNode(DjangoObjectType):
    """
    Notebook Node
    """
    class Meta:
        """
        Meta class
        """
        model = Notebook
        interfaces = (Node, )
        filter_fields = ['title']

    @classmethod
    def get_node(cls, id, context, info): #pylint:disable=unused-argument, redefined-builtin
        """
        gets node
        """
        auth_filter.get_node(id, context, Notebook)

class Query(AbstractType):
    """
    Notebook Query
    """
    notebook = Node.Field(NotebookNode)
    notebooks = DjangoFilterConnectionField(NotebookNode)

    def resolve_notebooks(self, args, context, info): #pylint: disable=no-self-use,unused-argument
        """
        Returns list of Notebooks
        """
        return auth_filter.resolve_models(context, Notebook)
