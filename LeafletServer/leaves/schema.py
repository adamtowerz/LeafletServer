"""
Schema for Leaves
"""

from graphene import AbstractType, Node
from graphene_django.filter import DjangoFilterConnectionField
from graphene_django.types import DjangoObjectType
from LeafletServer.leaves.models import Leaf
from LeafletServer import auth_filter

class LeafNode(DjangoObjectType):
    """
    Leaf Node
    """
    class Meta:
        """
        Meta Class
        """
        model = Leaf
        interfaces = (Node, )
        filter_fields = ['title']

    @classmethod
    def get_node(cls, id, context, info): #pylint:disable=unused-argument, redefined-builtin
        """
        gets node
        """
        auth_filter.get_node(id, context, Leaf)

class Query(AbstractType):
    """
    Leaf Query
    """
    leaf = Node.Field(LeafNode)
    leaves = DjangoFilterConnectionField(LeafNode)

    def resolve_leaves(self, args, context, info): #pylint: disable=no-self-use,unused-argument
        """
        Returns list of Leaves
        """
        return auth_filter.resolve_models(context, Leaf)
