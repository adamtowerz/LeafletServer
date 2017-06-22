"""
This module contains the API serializers for the leaf model
"""

from rest_framework import serializers
from LeafletServer.leaves.models import Leaf

class LeafSerializer(serializers.ModelSerializer):
    """
    Leaf Serializer class
    """
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Leaf
        fields = ('id', 'title', 'content', 'linenos', 'language', 'style',
                  'owner')
