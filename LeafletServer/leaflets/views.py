"""
Views for Leaflets
"""

from LeafletServer.leaflets.models import Leaflet
from LeafletServer.leaflets.serializers import LeafletSerializer
#from LeafletServer.main.permissions import IsOwnerOrReadOnly
from LeafletServer.main.permissions import OnlyOwnerReadWrite
from rest_framework import generics
from rest_framework import permissions

class LeafletList(generics.ListCreateAPIView):
    """
    Leaflet List class
    """
    queryset = Leaflet.objects.all()
    serializer_class = LeafletSerializer
    permission_classes = (permissions.IsAuthenticated, OnlyOwnerReadWrite)

    def perform_create(self, serializer):
        """
        Adds user to Leaves
        """
        serializer.save(owner=self.request.user)

class LeafletDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Leaflet Detail class
    """
    queryset = Leaflet.objects.all()
    serializer_class = LeafletSerializer
    permission_classes = (permissions.IsAuthenticated, OnlyOwnerReadWrite)
