"""
Schema for Notebooks
"""

import graphene
from graphene_django.types import DjangoObjectType
from LeafletServer.notebooks.models import Notebook, Section, Leaflet, Leaf


class NotebookType(DjangoObjectType):
    """
    Class for NotebookType
    """
    class Meta:
        """
        Meta class for NotebookType
        """
        model = Notebook

class SectionType(DjangoObjectType):
    """
    Class for SectionType
    """
    class Meta:
        """
        Meta class for SectionType
        """
        model = Section

class LeafletType(DjangoObjectType):
    """
    Class for LeafletType
    """
    class Meta:
        """
        Meta class for LeafletType
        """
        model = Leaflet

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
    Query for models
    """
    all_notebooks = graphene.List(NotebookType)
    all_sections = graphene.List(SectionType)
    all_leaflets = graphene.List(LeafletType)
    all_leaves = graphene.List(LeafType)

    def resolve_all_notebooks(self, args, context, info): #pylint: disable=no-self-use,unused-argument
        """
        Returns list of Notebooks
        """
        #return Notebook.objects.all()
        return Notebook.objects.select_related('section').all()

    def resolve_all_sections(self, args, context, info): #pylint: disable=no-self-use,unused-argument
        """
        Returns list of Sections
        """
        return Section.objects.select_related('leaflet').all()

    def resolve_all_leaflets(self, args, context, info): #pylint: disable=no-self-use,unused-argument
        """
        Returns list of Leaflets
        """
        return Leaflet.objects.select_related('leaf').all()

    def resolve_all_leaf(self, args, context, info): #pylint: disable=no-self-use,unused-argument
        """
        Returns list of Leaves
        """
        return Leaf.objects.all()
