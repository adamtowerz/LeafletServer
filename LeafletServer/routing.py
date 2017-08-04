"""
routes websockets for editing
"""

from channels.routing import route, include

channel_routing = [
    include('LeafletServer.editing.routing.channel_routing', path=r'^/editing'),
]
