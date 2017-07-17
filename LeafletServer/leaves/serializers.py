"""
This module contains the API serializers for the leaf model
"""

from rest_framework import serializers
from LeafletServer.leaves.models import Leaf
from LeafletServer.leaflets.models import Leaflet

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

    class Meta:
        model = Leaf
        fields = ('id', 'leaflet', 'leaf_type', 'created', 'title', 'content',
                  'owner')
