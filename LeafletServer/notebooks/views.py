"""
Views for Notebooks
"""

from LeafletServer.notebooks.models import Notebook
from LeafletServer.notebooks.serializers import NotebookSerializer
#from LeafletServer.main.permissions import IsOwnerOrReadOnly
from LeafletServer.main.permissions import OnlyOwnerReadWrite
from rest_framework import generics
from rest_framework import permissions

class NotebookList(generics.ListCreateAPIView):
    """
    Notebook List class
    """
    serializer_class = NotebookSerializer

    def get_queryset(self):
        #return Notebook.objects.all().get(owner=self.request.user)
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
    queryset = Notebook.objects.all()
    serializer_class = NotebookSerializer
