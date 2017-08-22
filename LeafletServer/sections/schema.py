"""
Schema for Sections
"""

import graphene
from graphene_django.types import DjangoObjectType
from LeafletServer.sections.models import Section
from LeafletServer import auth_filter

class SectionType(DjangoObjectType):
    """
    Class for SectionType
    """
    class Meta:
        """
        Meta class for SectionType
        """
        model = Section

class Query(graphene.AbstractType):
    """
    Section Query
    """
    section = graphene.Field(SectionType, id=graphene.Int(),
                             name=graphene.String())
    sections = graphene.List(SectionType)

    def resolve_section(self, args, context, info): #pylint: disable=no-self-use,unused-argument
        """
        Returns Single Section
        """
        return auth_filter.resolve_model(args, context, Section)

    def resolve_sections(self, args, context, info): #pylint: disable=no-self-use,unused-argument
        """
        Returns list of Sections
        """
        return auth_filter.resolve_models(context, Section)
