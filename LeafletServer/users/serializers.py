"""
This module contains the API serializers for the User app
"""

#from django.contrib.auth.models import User
from LeafletServer.users.models import User
from LeafletServer.leaves.models import Leaf
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    """
    Serializer for users
    """
    leaves = serializers.PrimaryKeyRelatedField(many=True,
                                                queryset=Leaf.objects.all())

    class Meta:
        """
        Metadata Class for Django
        """
        model = User
        fields = ('id', 'email', 'password', 'plan', 'first_name', 'last_name',
                  'leaves')
