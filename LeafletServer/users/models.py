"""
Contains Django models for User app
"""
from django.db import models

class User(models.Model):
    """
    This is the model for users
    """
    created = models.DateTimeField(auto_now_add=True)
    username = models.CharField(max_length=20)
    email = models.CharField(max_length=20)
    password = models.CharField(max_length=100)
    plan = models.PositiveSmallIntegerField()

    class Meta:
        """
        This class is the Django metadata class
        """
        ordering = ('created',)
