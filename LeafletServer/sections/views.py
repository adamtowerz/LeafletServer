"""
Views for Sections
"""

from LeafletServer.sections.models import Section
from LeafletServer.sections.serializers import SectionSerializer
from rest_framework import generics

class SectionList(generics.ListCreateAPIView):
    """
    Section List class
    """
    serializer_class = SectionSerializer

    def get_queryset(self):
        return Section.objects.filter(owner=self.request.user)

    def perform_create(self, serializer):
        """
        Adds user to Leaves
        """
        serializer.save(owner=self.request.user)

class SectionDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Section Detail class
    """
    serializer_class = SectionSerializer

    def get_queryset(self):
        return Section.objects.filter(owner=self.request.user)
