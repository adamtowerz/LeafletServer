#!/usr/bin/python3
"""
Simple cherrypy dev server
"""

import os
import cherrypy

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PATH = os.path.join(BASE_DIR, 'LeafletServer', 'Leaflet', 'dist')
print(PATH)

cherrypy.config.update({
    'server.socket_host': '0.0.0.0',
    'server.socket_port': 3000,
    })

class Root(object): pass #pylint: disable=missing-docstring,too-few-public-methods, multiple-statements

cherrypy.quickstart(Root(), '/', config={
    '/': {
        'tools.staticdir.on': True,
        'tools.staticdir.dir': PATH,
        'tools.staticdir.index': 'index.html',
        },
    })
