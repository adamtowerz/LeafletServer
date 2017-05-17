"""
Views for leaves
"""

from LeafletServer.leaves.models import Leaf
from LeafletServer.leaves.serializers import LeafSerializer
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
