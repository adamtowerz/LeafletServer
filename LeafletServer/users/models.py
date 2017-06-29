"""
Contains Django models for User app
"""

from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    """
    User class for django
    """
    email = models.EmailField(max_length=254, unique=True)
    plan = models.PositiveSmallIntegerField(default=1)
    date_joined = models.DateTimeField(default=timezone.now)
