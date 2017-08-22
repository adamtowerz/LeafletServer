"""
Provides websockets for editing
"""

from channels.generic.websockets import WebsocketConsumer
from channels.sessions import channel_session
from channels import Group
from urllib.parse import parse_qs
from LeafletServer.sections.models import Section

class EditingConsumer(WebsocketConsumer):
    """
    websocket for editing
    """

    http_user = True
    strict_ordering = True

    def connection_groups(self, **kwargs):
        """
        Called to return the list of groups to automatically add/remove
        this connection to/from.
        """
        #return ["test"]
        pass

    def connect(self, message, **kwargs):
        """
        Perform things on connection start
        """
        params = parse_qs(message.content["query_string"])
        param_id = 5

        if ("user" in message and
            len(Section.objects.filter(param_id)) != 0):
            self.message.reply_channel.send({"accept": True})
            Group("edit-%s" % params).add(message.reply_channel)
        else:
            self.message.reply_channel.send({"close": True})



    def receive(self, text=None, bytes=None, **kwargs):
        """
        Called when a message is received with either text or bytes
        filled out.
        """
# Simple echo
        self.send(text=text, bytes=bytes)

    def disconnect(self, message, **kwargs):
        """
        Perform things on connection close
        """
        Group("chat-%s" % room_name).discard(message.reply_channel)
