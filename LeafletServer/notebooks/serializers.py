"""
This module contains the API serializers for the Notebook model
"""

from rest_framework import serializers
from LeafletServer.notebooks.models import Notebook, Section, Leaflet, Leaf

class NotebookSerializer(serializers.ModelSerializer):
    """
    Notebook Serializer class
    """
    owner = serializers.ReadOnlyField(source='owner.username')
    #sections = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Notebook
        #fields = ('id', 'title', 'owner', 'sections', 'sharing')
        fields = ('id', 'title', 'owner')

    def create(self, validated_data):
        obj = Notebook.objects.create(**validated_data)
        obj.save(owner=self.context['request'].user)
        return obj

class SectionSerializer(serializers.ModelSerializer):
    """
    Section Serializer class
    """

    owner = serializers.ReadOnlyField(source='owner.username')
    #leaflets = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        """
        Meta class
        """
        model = Section
        #fields = ('id', 'notebook', 'title', 'owner', 'leaflets', 'sharing')
        fields = ('id', 'notebook', 'title', 'owner')

    def create(self, validated_data):
        obj = Section.objects.create(**validated_data)
        obj.save(owner=self.context['request'].user)
        return obj

class LeafletSerializer(serializers.ModelSerializer):
    """
    Leaflet Serializer class
    """

    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        """
        Meta class
        """
        model = Leaflet
        fields = ('id', 'section', 'title', 'is_favorite', 'owner')
        #fields = ('id', 'section', 'leaves', 'title', 'is_favorite', 'owner',
        #          'sharing')

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
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Leaf
        fields = ('id', 'leaflet', 'leaf_type', 'created', 'title', 'content',
                  'owner')

    def create(self, validated_data):
        obj = Leaf.objects.create(**validated_data)
        obj.save(owner=self.context['request'].user)
        return obj
