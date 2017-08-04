"""
Consumer for Sections
"""

from LeafletServer.sections.models import Section
from django.db import models
from channels.binding.websockets import WebsocketBinding

class SectionBinding(WebsocketBinding):

    model = Section
    stream = "section"
    fields = ["title", "owner"]

    @classmethod
    def group_names(cls, instance):
        return ["section-updates"]

    def has_permission(self, user, action, pk):
        if action == "delete":
            return True
        elif action == "create"
            return True
        elif action == "update"
            return True
        return False
