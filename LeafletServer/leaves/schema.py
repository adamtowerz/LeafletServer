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

class Query(object):
    """
    Leaf Query
    """
    leaf = graphene.Field(LeafType, id=graphene.Int(),
                          title=graphene.String())
    leaves = graphene.List(LeafType)

    def resolve_leaf(self, info, id, title): #pylint: disable=no-self-use,unused-argument,redefined-builtin
        """
        Returns Single Leaf
        """
        return auth_filter.resolve_model(info, id, title, Leaf)

    def resolve_leaves(self, info): #pylint: disable=no-self-use,unused-argument
        """
        Returns list of Leaves
        """
        return auth_filter.resolve_models(info, Leaf)

class LeafInput(graphene.InputObjectType):
    """
    Leaf Input
    """
    title = graphene.String(required=True)
    leafType = graphene.String(required=True)
    content = graphene.JSONString()

def save_leaf(info, title, leaftype, content):
    """
    Saves Leaf
    """
    leaf = Leaf(owner=info.context.user)
    leaf.title = title
    leaf.leaf_type = leaftype
    leaf.content = content
    leaf.save()
    return leaf

class CreateLeaf(graphene.Mutation):
    """
    Leaf Creation Mutation
    """
    class Arguments:
        """
        Input Class
        """
        title = graphene.String(required=True)
        leafType = graphene.String(required=True)
        content = graphene.JSONString()

    leaf = graphene.Field(lambda: LeafType)

    @staticmethod
    def mutate(root, info, title, leaftype, content="", leaf=None): #pylint: disable=unused-argument
        """
        Create and return Leaf
        """
        return CreateLeaf(leaf=save_leaf(info, title, leaftype, content))

class Mutation(object):
    """
    Leaf Mutations
    """
    create_leaf = CreateLeaf.Field()
