"""
Schema for Notebooks
"""

import graphene
from graphene_django.types import DjangoObjectType
from LeafletServer.notebooks.models import Notebook, Section, Leaflet, Leaf

class GetModel:
    """
    Class for Model Types
    """
    @staticmethod
    def get_node(context, id, model):
        """
        gets node and checks authentication
        """
        print("--------------------------------------")
        print(context)
        print("--------------------------------------")
        try:
            obj = model.objects.get(pk=id)
        except model.DoesNotExist:
            return None

        if context.user == obj.owner:
            return obj
        return None

class NotebookType(DjangoObjectType):
    """
    Class for NotebookType
    """
    class Meta:
        """
        Meta class for NotebookType
        """
        model = Notebook

    @classmethod
    def get_node(cls, id, context, info):
        GetModel.get_node(context, id, cls.__meta.model)

class SectionType(DjangoObjectType):
    """
    Class for SectionType
    """
    class Meta:
        """
        Meta class for SectionType
        """
        model = Section

    @classmethod
    def get_node(cls, id, context, info):
        GetModel.get_node(context, id, cls.__meta.model)

class LeafletType(DjangoObjectType):
    """
    Class for LeafletType
    """
    class Meta:
        """
        Meta class for LeafletType
        """
        model = Leaflet

    @classmethod
    def get_node(cls, id, context, info):
        GetModel.get_node(context, id, cls.__meta.model)

class LeafType(DjangoObjectType):
    """
    Class for LeafType
    """
    class Meta:
        """
        Meta class for LeafType
        """
        model = Leaf

    @classmethod
    def get_node(cls, id, context, info):
        GetModel.get_node(context, id, cls.__meta.model)

class Query(graphene.AbstractType):
    """
    Query for models
    """
    notebook = graphene.Field(NotebookType, id=graphene.Int(),
                              name=graphene.String())
    all_notebooks = graphene.List(NotebookType)

    section = graphene.Field(SectionType, id=graphene.Int(),
                             name=graphene.String())
    all_sections = graphene.List(SectionType)

    leaflet = graphene.Field(LeafletType, id=graphene.Int(),
                             name=graphene.String())
    all_leaflets = graphene.List(LeafletType)

    leaf = graphene.Field(LeafType, id=graphene.Int(),
                          name=graphene.String())
    all_leaves = graphene.List(LeafType)

    def resolve_all_notebooks(self, args, context, info): #pylint: disable=no-self-use,unused-argument
        """
        Returns list of Notebooks
        """
        return Query.resolve_all_model(context, Notebook)

    def resolve_all_sections(self, args, context, info): #pylint: disable=no-self-use,unused-argument
        """
        Returns list of Sections
        """
        return Query.resolve_all_model(context, Section)

    def resolve_all_leaflets(self, args, context, info): #pylint: disable=no-self-use,unused-argument
        """
        Returns list of Leaflets
        """
        return Query.resolve_all_model(context, Leaflet)

    def resolve_all_leaves(self, args, context, info): #pylint: disable=no-self-use,unused-argument
        """
        Returns list of Leaves
        """
        return Query.resolve_all_model(context, Leaf)

    @staticmethod
    def resolve_all_model(context, obj):
        """
        Retrieve list of objects
        """
        print("--------------------------------------")
        print(context.user)
        print("--------------------------------------")
        if not context.user.is_authenticated():
            return obj.objects.none()
        return obj.objects.filter(owner=context.user)

    @staticmethod
    def resolve_model(args, obj):
        """
        Retrieve single obj
        """
        pk = args.get('id')
        title = args.get('title')

        if pk is not None:
            return obj.objects.get(pk=pk)

        if title is not None:
            return obj.objects.get(title=title)

        return None
