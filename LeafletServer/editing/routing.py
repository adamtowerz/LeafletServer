"""
routes websockets for editing
"""

from channels.routing import route

channel_routing = [
    consumers.EditingConsumer.as_route( path=r"^/edit/(?P<room_name>[a-zA-Z0-9_]+)/$", include(editing.routing)),
]
