"""
This module contains the API serializers for the Notebook model
"""

from rest_framework import serializers
from LeafletServer.notebooks.models import Notebook

class NotebookSerializer(serializers.ModelSerializer):
    """
    Notebook Serializer class
    """
    owner = serializers.ReadOnlyField(source='owner.username')
    sections = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        """
        Meta Class
        """
        model = Notebook
        fields = ('id', 'title', 'owner', 'sections', 'sharing')
