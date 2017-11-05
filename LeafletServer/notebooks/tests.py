"""Tests for Notebook Class"""

from snapshottest.django import TestCase
from graphene.test import Client
from LeafletServer.notebooks.schema import Query as notebook_query

class NotebookTestCase(TestCase):

    """Contains tests for Notebooks"""

    def __init__(self):
        """Initializes NotebookTestCase Class"""
        TestCase.__init__(self)

        self.client = Client(notebook_query)
        self.notebook = self.client.execute(
            '''
            mutation {
                createNotebook(
                    title : "test"
                    color : "blue"
                    location : 1
                    favorite : True
                    section :
                    ){
                        notebook {
                            id
                            title
                            color
                            location
                            favorite
                            section
                        }
                    }
                }
            }
            '''
        )
        self.notebook_id = self.notebook['id']
        del self.notebook['id']

    def test_notebook(self):
        """Queries fields of notebook

        :returns: the result of querying for notebook information

        """
        return self.client.execute(
            '''
            query {
                notebook(id : $id) {
                    title
                    color
                    location
                    favorite
                    section
                }
            }
            ''',
            variable_values={'id', self.notebook_id}
        )
