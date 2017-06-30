"""
This module contains the API serializers for the Section model
"""

from rest_framework import serializers
from django.views.generic import detail
from LeafletServer.sections.models import Section
from LeafletServer.notebooks.models import Notebook

class SectionSerializer(serializers.ModelSerializer):
    """
    Section Serializer class
    """
    def __init__(self, *args, **kwargs):
        super(SectionSerializer, self).__init__(*args, **kwargs)

        request = kwargs['context']['request']

        self.fields['notebook'] = serializers.PrimaryKeyRelatedField(many=False\
             , read_only=False, queryset=Notebook.objects.filter(owner=
                                                                 request.user))

    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        """
        Meta class
        """
        model = Section
        fields = ('id', 'notebook', 'title', 'owner')
