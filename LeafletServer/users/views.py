"""
Views for users
"""

from django.contrib.auth.models import User
from LeafletServer.users.serializers import UserSerializer
from rest_framework import generics

class UserList(generics.ListAPIView):
    """
    User List class
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveAPIView):
    """
    User Detail class
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
