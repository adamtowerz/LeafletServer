"""
Views for leaves
"""

from leaflet.leaves.models import Leaf
from leaflet.leaves.serializers import LeafSerializer
from rest_framework import generics

class LeafList(generics.ListCreateAPIView): #pylint: disable=too-many-ancestors
    """
    Leaf List class
    """
    queryset = Leaf.objects.all()
    serializer_class = LeafSerializer

class LeafDetail(generics.RetrieveUpdateDestroyAPIView): #pylint: disable=too-many-ancestors
    """
    Leaf Detail class
    """
    queryset = Leaf.objects.all()
    serializer_class = LeafSerializer
