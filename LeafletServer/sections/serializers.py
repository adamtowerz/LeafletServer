"""
This module contains the API serializers for the Section model
"""

from rest_framework import serializers
from LeafletServer.sections.models import Section

class SectionSerializer(serializers.ModelSerializer):
    """
    Section Serializer class
    """
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Section
        fields = ('id', 'notebook', 'title', 'owner')
