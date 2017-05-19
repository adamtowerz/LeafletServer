"""
Views for leaves
"""

from LeafletServer.leaves.models import Leaf
from LeafletServer.leaves.serializers import LeafSerializer
from rest_framework import generics

class LeafList(generics.ListCreateAPIView):
    """
    Leaf List class
    """
    queryset = Leaf.objects.all()
    serializer_class = LeafSerializer

class LeafDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Leaf Detail class
    """
    queryset = Leaf.objects.all()
    serializer_class = LeafSerializer
