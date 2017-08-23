"""
Schema for Leaflets
"""

import graphene
from graphene_django.types import DjangoObjectType
from LeafletServer.leaflets.models import Leaflet
from LeafletServer import auth_filter

class LeafletType(DjangoObjectType):
    """
    Class for LeafletType
    """
    class Meta:
        """
        Meta class for LeafletType
        """
        model = Leaflet

class Query(graphene.AbstractType):
    """
    Leaflet Query
    """
    leaflet = graphene.Field(LeafletType, id=graphene.Int(),
                             title=graphene.String())
    leaflets = graphene.List(LeafletType)

    def resolve_leaflet(self, args, context, info): #pylint: disable=no-self-use,unused-argument
        """
        Returns Single Leaflet
        """
        return auth_filter.resolve_model(args, context, Leaflet)

    def resolve_leaflets(self, args, context, info): #pylint: disable=no-self-use,unused-argument
        """
        Returns list of Leaflets
        """
        return auth_filter.resolve_models(context, Leaflet)
