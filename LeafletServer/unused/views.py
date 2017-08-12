"""
Views for Notebooks
"""

from LeafletServer.notebooks.models import Notebook
from LeafletServer.notebooks.serializers import NotebookSerializer
from rest_framework import generics

class NotebookList(generics.ListCreateAPIView):
    """
    Notebook List class
    """
    serializer_class = NotebookSerializer

    def get_queryset(self):
        return Notebook.objects.filter(owner=self.request.user)

    def perform_create(self, serializer):
        """
        Adds user to Notebook
        """
        serializer.save(owner=self.request.user)

class NotebookDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Notebook Detail class
    """
    serializer_class = NotebookSerializer

    def get_queryset(self):
        return Notebook.objects.filter(owner=self.request.user)
