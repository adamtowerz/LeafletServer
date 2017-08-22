"""
Schema for Leaflets
"""

from graphene import AbstractType, Node
from graphene_django.filter import DjangoFilterConnectionField
from graphene_django.types import DjangoObjectType
from LeafletServer.leaflets.models import Leaflet
from LeafletServer import auth_filter

class LeafletNode(DjangoObjectType):
    """
    Leaflet Node
    """
    class Meta:
        """
        Meta Class
        """
        model = Leaflet
        interfaces = (Node, )
        filter_fields = ['title']

    @classmethod
    def get_node(cls, id, context, info): #pylint:disable=unused-argument, redefined-builtin
        """
        gets node
        """
        auth_filter.get_node(id, context, Leaflet)

class Query(AbstractType):
    """
    Leaflet Query
    """
    leaflet = Node.Field(LeafletNode)
    leaflets = DjangoFilterConnectionField(LeafletNode)

    def resolve_leaflets(self, args, context, info): #pylint: disable=no-self-use,unused-argument
        """
        Returns list of Leaflets
        """
        return auth_filter.resolve_models(context, Leaflet)
