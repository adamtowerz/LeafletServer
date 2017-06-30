"""
Views for Sections
"""

from LeafletServer.sections.models import Section
from LeafletServer.sections.serializers import SectionSerializer
#from LeafletServer.main.permissions import IsOwnerOrReadOnly
#from LeafletServer.main.permissions import OnlyOwnerReadWrite
from rest_framework import generics
#from rest_framework import permissions

class SectionList(generics.ListCreateAPIView):
    """
    Section List class
    """
    serializer_class = SectionSerializer
    #permission_classes = (permissions.IsAuthenticated, OnlyOwnerReadWrite)

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
    queryset = Section.objects.all()
    serializer_class = SectionSerializer
    #permission_classes = (permissions.IsAuthenticated, OnlyOwnerReadWrite)
