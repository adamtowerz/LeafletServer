"""
Views for users
"""

from LeafletServer.users.models import User
from LeafletServer.users.serializers import UserSerializer
from rest_framework import generics

class UserList(generics.ListCreateAPIView): #pylint: disable=too-many-ancestors
    """
    User List class
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView): #pylint: disable=too-many-ancestors
    """
    User Detail class
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
