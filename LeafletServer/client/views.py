"""
View that renders React
"""

import os
import json
from django.http import HttpResponse
from django.views.generic import TemplateView
from django.conf import settings
from react.render import render_component

class ReactRender(TemplateView):
    """
    Renders react content
    """
    def get(self, request, *args, **kwargs):
        #AppContainer = get_template('AppContainer.js')
        AppContainer = os.path.join(settings.BASE_DIR, 'LeafletClient',
                                    'src', 'containers', 'AppContainer.js')
        content = os.path.join(settings.BASE_DIR, 'LeafletServer', 'client',
                               'state.json')
        with open(content, 'r') as myfile:
            state = myfile.read().replace('\n', '').replace('\t', '')
        state = dict(json.loads(state))
        print(state)
        rendered = render_component(AppContainer, state)
        print(rendered)
        #return HttpResponse(rendered)
        return HttpResponse("hello")
