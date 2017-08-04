"""
This module contains the API serializers for the Notebook model
"""

#import ast
from rest_framework import serializers
from LeafletServer.notebooks.models import Notebook

class NotebookSerializer(serializers.ModelSerializer):
    """
    Notebook Serializer class
    """
    owner = serializers.ReadOnlyField(source='owner.username')
    sections = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Notebook
        fields = ('id', 'title', 'owner', 'sections', 'sharing')

    """
    def create(self, validated_data):
        if 'sharing' in validated_data:
            print("----------------------------------------------------")
            print(validated_data)
            print("----------------------------------------------------")
            validated_data['sharing'] = ast.literal_eval(
                validated_data['sharing'])
        return Notebook.objects.create(**validated_data)

    def update(self, instance, validated_data):
        if 'sharing' in validated_data:
            instance.sharing = ast.literal_eval(validated_data.get('sharing',
                                                                   instance.
                                                                   sharing))
        instance_modified = super(NotebookSerializer,
                                  self).update(instance, validated_data)
        return instance_modified
    """
