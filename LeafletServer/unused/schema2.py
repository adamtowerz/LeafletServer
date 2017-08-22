






import graphene
from graphene_django.types import DjangoObjectType
#from graphene_django.rest_framework.mutation import SerializerMutation
from LeafletServer.notebooks.models import Notebook, Section, Leaflet, Leaf
from LeafletServer.notebooks.serializers import NotebookSerializer, \
    SectionSerializer, LeafletSerializer, LeafSerializer

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
    notebook = graphene.Field(NotebookType, id=graphene.Int(),
                              name=graphene.String())
    notebooks = graphene.List(NotebookType)

    section = graphene.Field(SectionType, id=graphene.Int(),
                             name=graphene.String())
    sections = graphene.List(SectionType)

    leaflet = graphene.Field(LeafletType, id=graphene.Int(),
                             name=graphene.String())
    leaflets = graphene.List(LeafletType)

    leaf = graphene.Field(LeafType, id=graphene.Int(),
                          name=graphene.String())
    leaves = graphene.List(LeafType)

    def resolve_notebooks(self, args, context, info): #pylint: disable=no-self-use,unused-argument
        """
        Returns list of Notebooks
        """
        return Query.resolve_models(context, Notebook)

    def resolve_notebook(self, args, context, info): #pylint: disable=no-self-use,unused-argument
        """
        Returns Single Notebook
        """
        return Query.resolve_model(args, context, Notebook)

    def resolve_sections(self, args, context, info): #pylint: disable=no-self-use,unused-argument
        """
        Returns list of Sections
        """
        return Query.resolve_models(context, Section)

    def resolve_section(self, args, context, info): #pylint: disable=no-self-use,unused-argument
        """
        Returns Single Section
        """
        return Query.resolve_model(args, context, Section)

    def resolve_leaflets(self, args, context, info): #pylint: disable=no-self-use,unused-argument
        """
        Returns list of Leaflets
        """
        return Query.resolve_models(context, Leaflet)

    def resolve_leaflet(self, args, context, info): #pylint: disable=no-self-use,unused-argument
        """
        Returns Single Leaflet
        """
        return Query.resolve_model(args, context, Leaflet)

    def resolve_leaves(self, args, context, info): #pylint: disable=no-self-use,unused-argument
        """
        Returns list of Leaves
        """
        return Query.resolve_models(context, Leaf)

    def resolve_leaf(self, args, context, info): #pylint: disable=no-self-use,unused-argument
        """
        Returns Single Leaf
        """
        return Query.resolve_model(args, context, Leaf)

    @staticmethod
    def resolve_models(context, obj):
        """
        Retrieve list of objects
        """
        if not context.user.is_authenticated():
            return obj.objects.none()
        return obj.objects.filter(owner=context.user)

    @staticmethod
    def resolve_model(args, context, model):
        """
        Retrieve single objects
        """
        pk = args.get('id')
        title = args.get('title')

        if pk is not None:
            try:
                obj = model.objects.get(pk=pk)
            except model.DoesNotExist:
                return None
        elif title is not None:
            try:
                obj = model.objects.get(title=title)
            except model.DoesNotExist:
                return None
        else:
            return None

        if context.user == obj.owner:
            return obj
        return None

"""

class NotebookMutation(SerializerMutation):
    class Meta:
        serializer_class = NotebookSerializer

class SectionMutation(SerializerMutation):
    class Meta:
        serializer_class = SectionSerializer

class LeafletMutation(SerializerMutation):
    class Meta:
        serializer_class = LeafletSerializer

class LeafMutation(SerializerMutation):
    class Meta:
        serializer_class = LeafSerializer

class Mutation(graphene.ObjectType):
    #class for Mutation
    edit_notebook = NotebookMutation.Field()
    edit_section = SectionMutation.Field()
    edit_leaflet = LeafletMutation.Field()
    edit_leaf = LeafMutation.Field()
"""

