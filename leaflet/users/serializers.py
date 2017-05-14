"""
This module contains the API serializers for the User app
"""
from leaflet.users.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    """
    Serializer for users
    """

    class Meta:
        """
        Metadata Class for Django
        """
        model = User
        fields = ('id', 'created', 'username', 'email', 'password', 'plan')
