"""Tests for graphiql endpoints"""

from snapshottest import TestCase
from graphene.test import Client
from LeafletServer.notebooks.schema import Query as notebook_query

class APITestCase(TestCase):
    """Tests API for Notebooks"""
    def test_create_notebook(self):
        """Testing the API for notebook creation"""
        client = Client(notebook_query)
        self.assertMatchSnapshot(client.execute(
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
        ))

    def test_create_test(self):
        """Testing the API for notebook creation"""
        client = Client(notebook_query)
        self.assertMatchSnapshot(client.execute('''{ hey }'''))
