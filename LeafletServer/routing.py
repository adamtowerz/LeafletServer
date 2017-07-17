"""
routes websockets for editing
"""

from channels.routing import route, include

routing = [
    include('LeafletServer.editing.routing', path=r'^/editing'),
]
