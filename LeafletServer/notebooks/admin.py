"""
Admin class for Notebooks
"""

from django.contrib import admin
from LeafletServer.notebooks.models import Notebook

class NotebookAdmin(admin.ModelAdmin):
    """
    Notebook admin
    """
    pass

admin.site.register(Notebook, NotebookAdmin)
