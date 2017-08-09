"""
This module contains the API serializers for the Notebook model
"""

#import ast
from rest_framework import serializers
from LeafletServer.notebooks.models import Notebook, Section, Leaflet, Leaf

class NotebookSerializer(serializers.ModelSerializer):
    """
    Notebook Serializer class
    """
    owner = serializers.ReadOnlyField(source='owner.username')
    sections = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Notebook
        fields = ('id', 'title', 'owner', 'sections', 'sharing')

    def create(self, validated_data):
        obj = Notebook.objects.create(**validated_data)
        obj.save(owner=self.context['request'].user)
        return obj

    """
    def update(self, instance, validated_data):
        if 'sharing' in validated_data:
            instance.sharing = ast.literal_eval(validated_data.get('sharing',
                                                                   instance.
                                                                   sharing))
        instance_modified = super(NotebookSerializer,
                                  self).update(instance, validated_data)
        return instance_modified
    """

class SectionSerializer(serializers.ModelSerializer):
    """
    Section Serializer class
    """
    def __init__(self, *args, **kwargs):
        super(SectionSerializer, self).__init__(*args, **kwargs)

        request = kwargs['context']['request']

        self.fields['notebook'] = serializers.PrimaryKeyRelatedField(
            many=False, read_only=False,
            queryset=Notebook.objects.filter(owner=request.user))

    owner = serializers.ReadOnlyField(source='owner.username')
    leaflets = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    sharing = serializers.SerializerMethodField()

    class Meta:
        """
        Meta class
        """
        model = Section
        fields = ('id', 'notebook', 'title', 'owner', 'leaflets', 'sharing')

    def create(self, validated_data):
        obj = Section.objects.create(**validated_data)
        obj.save(owner=self.context['request'].user)
        return obj

    def get_sharing(self, obj): #pylint:disable=no-self-use
        """
        gets 'sharing' dict from Notebook
        """
        return obj.notebook.sharing

class LeafletSerializer(serializers.ModelSerializer):
    """
    Leaflet Serializer class
    """
    def __init__(self, *args, **kwargs):
        super(LeafletSerializer, self).__init__(*args, **kwargs)

        request = kwargs['context']['request']

        self.fields['section'] = serializers.PrimaryKeyRelatedField(
            many=False, read_only=False,
            queryset=Section.objects.filter(owner=request.user))

    owner = serializers.ReadOnlyField(source='owner.username')
    leaves = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    sharing = serializers.SerializerMethodField()

    class Meta:
        """
        Meta class
        """
        model = Leaflet
        fields = ('id', 'section', 'leaves', 'title', 'is_favorite', 'owner',
                  'sharing')

    def create(self, validated_data):
        obj = Leaflet.objects.create(**validated_data)
        obj.save(owner=self.context['request'].user)
        return obj

    def get_sharing(self, obj): #pylint:disable=no-self-use
        """
        gets 'sharing' dict from Section (Notebook for now)
        """
        return obj.section.notebook.sharing

class LeafSerializer(serializers.ModelSerializer):
    """
    Leaf Serializer class
    """
    def __init__(self, *args, **kwargs):
        super(LeafSerializer, self).__init__(*args, **kwargs)

        request = kwargs['context']['request']

        self.fields['leaflet'] = serializers.PrimaryKeyRelatedField(
            many=False, read_only=False,
            queryset=Leaflet.objects.filter(owner=request.user))

    owner = serializers.ReadOnlyField(source='owner.username')
    sharing = serializers.SerializerMethodField()

    class Meta:
        model = Leaf
        fields = ('id', 'leaflet', 'leaf_type', 'created', 'title', 'content',
                  'owner', 'sharing')

    def create(self, validated_data):
        obj = Leaf.objects.create(**validated_data)
        obj.save(owner=self.context['request'].user)
        return obj

    def get_sharing(self, obj): #pylint:disable=no-self-use
        """
        gets 'sharing' dict from Notebook
        """
        return obj.leaflet.section.notebook.sharing
