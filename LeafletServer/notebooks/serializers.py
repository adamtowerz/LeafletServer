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

    class Meta:
        model = Notebook
        fields = ('id', 'title', 'owner')
