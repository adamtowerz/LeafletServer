"""
Views for leaves
"""

from LeafletServer.leaves.models import Leaf
from LeafletServer.leaves.serializers import LeafSerializer
from LeafletServer.leaves.permissions import IsOwnerOrReadOnly
from rest_framework import generics
from rest_framework import permissions

class LeafList(generics.ListCreateAPIView):
    """
    Leaf List class
    """
    queryset = Leaf.objects.all()
    serializer_class = LeafSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def perform_create(self, serializer):
        """
        Adds user to Leaves
        """
        serializer.save(owner=self.request.user)

class LeafDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Leaf Detail class
    """
    queryset = Leaf.objects.all()
    serializer_class = LeafSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly,)
