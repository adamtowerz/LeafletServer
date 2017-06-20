"""
Models for pages
"""

from django.db import models
from LeafletServer.sections.models import Section

class Page(models.Model):
    """
    Class for Pages
    """
    section = models.ForeignKey(Section, on_delete=models.CASCADE)
    title = models.CharField(max_length=100, blank=True, default='')
    is_favorite = models.BooleanField(default=False)
    page_id = models.BigIntegerField()
