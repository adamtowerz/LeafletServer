"""
Views for users
"""

from LeafletServer.users.models import User
from LeafletServer.users.serializers import UserSerializer
from rest_framework import generics

class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveAPIView):
    """
    User Detail class
    """
    lookup_field = 'email'
    queryset = User.objects.all()
    serializer_class = UserSerializer
