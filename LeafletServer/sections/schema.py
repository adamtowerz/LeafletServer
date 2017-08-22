"""
Schema for Sections
"""

from graphene import AbstractType, Node
from graphene_django.filter import DjangoFilterConnectionField
from graphene_django.types import DjangoObjectType
from LeafletServer.sections.models import Section
from LeafletServer import auth_filter

class SectionNode(DjangoObjectType):
    """
    Section Node
    """
    class Meta:
        """
        Meta class
        """
        model = Section
        interfaces = (Node, )
        filter_fields = ['title']

    @classmethod
    def get_node(cls, id, context, info): #pylint:disable=unused-argument, redefined-builtin
        """
        gets node
        """
        auth_filter.get_node(id, context, Section)

class Query(AbstractType):
    """
    Section Query
    """
    section = Node.Field(SectionNode)
    sections = DjangoFilterConnectionField(SectionNode)

    def resolve_sections(self, args, context, info): #pylint: disable=no-self-use,unused-argument
        """
        Returns list of Sections
        """
        return auth_filter.resolve_models(context, Section)
