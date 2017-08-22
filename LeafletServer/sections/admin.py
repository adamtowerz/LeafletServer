"""
Admin class for Sections
"""

from django.contrib import admin
from LeafletServer.sections.models import Section

class SectionAdmin(admin.ModelAdmin):
    """
    Section admin
    """
    pass

admin.site.register(Section, SectionAdmin)
