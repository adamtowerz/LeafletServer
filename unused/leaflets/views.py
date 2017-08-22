"""
Views for Leaflets
"""

from LeafletServer.leaflets.models import Leaflet
from LeafletServer.leaflets.serializers import LeafletSerializer
from rest_framework import generics

class LeafletList(generics.ListCreateAPIView):
    """
    Leaflet List class
    """
    serializer_class = LeafletSerializer

    def get_queryset(self):
        """
        gets queryset
        """
        return Leaflet.objects.filter(owner=self.request.user)

    def perform_create(self, serializer):
        """
        Adds user to Leaves
        """
        serializer.save(owner=self.request.user)

class LeafletDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Leaflet Detail class
    """
    serializer_class = LeafletSerializer

    def get_queryset(self):
        """
        gets queryset
        """
        return Leaflet.objects.filter(owner=self.request.user)
