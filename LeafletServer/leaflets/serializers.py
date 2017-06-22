"""
This module contains the API serializers for the Leaflet model
"""

from rest_framework import serializers
from LeafletServer.leaflets.models import Leaflet

class LeafletSerializer(serializers.ModelSerializer):
    """
    Leaflet Serializer class
    """
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Leaflet
        fields = ('id', 'section', 'title', 'is_favorite', 'owner')
