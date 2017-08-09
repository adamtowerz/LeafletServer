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
    serializer_class = LeafSerializer

    def get_queryset(self):
        return Leaf.objects.filter(owner=self.request.user)

    def perform_create(self, serializer):
        """
        Adds user to Leaves
        """
        serializer.save(owner=self.request.user)

class LeafDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Leaf Detail class
    """
    serializer_class = LeafSerializer

    def get_queryset(self):
        return Leaf.objects.filter(owner=self.request.user)
