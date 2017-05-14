"""
This module contains the API serializers for the leaf model
"""

from rest_framework import serializers
from leaflet.leaves.models import Leaf, LANGUAGE_CHOICES, STYLE_CHOICES

class LeafSerializer(serializers.Serializer):
    """
    Leaf Serializer class
    """

    id = serializers.IntegerField(read_only=True) #pylint: disable=invalid-name
    title = serializers.CharField(required=False, allow_blank=True, max_length=100)
    #content = serializers.CharField(style={'base_template': 'textarea.html'})
    content = serializers.CharField(required=True, allow_blank=True)
    linenos = serializers.BooleanField(required=False)
    language = serializers.ChoiceField(choices=LANGUAGE_CHOICES, default='python')
    style = serializers.ChoiceField(choices=STYLE_CHOICES, default='friendly')

    def create(self, validated_data):
        """
        Create and return a new `Leaf` instance, given the validated data.
        """
        return Leaf.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing `Leaf` instance, given the validated data.
        """
        instance.title = validated_data.get('title', instance.title)
        instance.content = validated_data.get('content', instance.content)
        instance.linenos = validated_data.get('linenos', instance.linenos)
        instance.language = validated_data.get('language', instance.language)
        instance.style = validated_data.get('style', instance.style)
        instance.save()
        return instance
