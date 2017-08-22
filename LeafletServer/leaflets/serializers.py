"""
This module contains the API serializers for the Leaflet model
"""

from rest_framework import serializers
from LeafletServer.leaflets.models import Leaflet
from LeafletServer.sections.models import Section

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

    def get_sharing(self, obj): #pylint:disable=no-self-use
        """
        gets 'sharing' dict from Section (Notebook for now)
        """
        return obj.section.notebook.sharing
