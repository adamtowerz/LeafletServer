"""
Schema for Leaves
"""

import graphene
from graphene_django.types import DjangoObjectType
from LeafletServer.leaves.models import Leaf
from LeafletServer import auth_filter

class LeafType(DjangoObjectType):
    """
    Class for LeafType
    """
    class Meta:
        """
        Meta class for LeafType
        """
        model = Leaf

class Query(graphene.AbstractType):
    """
    Leaf Query
    """
    leaf = graphene.Field(LeafType, id=graphene.Int(),
                          title=graphene.String())
    leaves = graphene.List(LeafType)

    def resolve_leaf(self, args, context, info): #pylint: disable=no-self-use,unused-argument
        """
        Returns Single Leaf
        """
        return auth_filter.resolve_model(args, context, Leaf)

    def resolve_leaves(self, args, context, info): #pylint: disable=no-self-use,unused-argument
        """
        Returns list of Leaves
        """
        return auth_filter.resolve_models(context, Leaf)
