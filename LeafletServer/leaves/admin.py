"""
Admin class for Leaves
"""

from django.contrib import admin
from LeafletServer.leaves.models import Leaf

class LeafAdmin(admin.ModelAdmin):
    """
    Leaf admin
    """
    pass

admin.site.register(Leaf, LeafAdmin)
