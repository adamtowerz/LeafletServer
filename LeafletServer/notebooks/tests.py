"""Tests for Notebook Class"""

import unittest
from snapshottest.django import TestCase
from graphene.test import Client
from LeafletServer.schema import schema
from LeafletServer.users.models import User

class NotebookTestCase(TestCase):

    """Contains tests for Notebooks"""

    def setUp(self):
        """Initializes NotebookTestCase Class"""
        self.user = User(username='test', password='meme')

        self.client = Client(schema)
        self.notebook = self.client.execute(
            '''mutation {
                createNotebook(
                    title : "test"
                    color : "blue"
                    location : 1
                    favorite : true
                    ){
                        notebook {
                            id
                            title
                            color
                            location
                            favorite
                        }
                        ok
                    }
            }''',
            context_value={'user': User(username='test',password='meme')}
        )
        print(self.notebook)
        self.notebook_id = \
            self.notebook['data']['createNotebook']['notebook']['id']
        del self.notebook['data']['createNotebook']['notebook']['id']

    def test_create_notebook(self):
        """Test notebook creation"""
        self.assertMatchSnapshot(self.notebook)

    def test_edit_title(self):
        """Test to check editing notebook title"""
        self.assertMatchSnapshot(self.client.execute(
            '''mutation {
                editNotebookTitle(
                    title : "testedit"
                    id : $id
                    ){
                        notebook {
                            id
                            title
                            color
                            location
                            favorite
                        }
                        ok
                    }
            }''',
            context_value={'user': self.user},
            variable_values={'id', self.notebook_id}
        ))

    def test_edit_color(self):
        """Test to check editing notebook color"""
        self.assertMatchSnapshot(self.client.execute(
            '''mutation {
                editNotebookColor(
                    color : "red"
                    id : $id
                    ){
                        notebook {
                            id
                            title
                            color
                            location
                            favorite
                        }
                        ok
                    }
            }''',
            context_value={'user': self.user},
            variable_values={'id', self.notebook_id}
        ))

    def test_edit_location(self):
        """Test to check editing notebook location"""
        self.assertMatchSnapshot(self.client.execute(
            '''mutation {
                EditNotebookLocation(
                    location : 3
                    id : $id
                    ){
                        notebook {
                            id
                            title
                            color
                            location
                            favorite
                        }
                        ok
                    }
            }''',
            context_value={'user': self.user},
            variable_values={'id', self.notebook_id}
        ))

    def test_edit_favorite(self):
        """Test to check editing notebook favorite"""
        self.assertMatchSnapshot(self.client.execute(
            '''mutation {
                editNotebookFavorite(
                    favorite : false
                    id : $id
                    ){
                        notebook {
                            id
                            title
                            color
                            location
                            favorite
                        }
                        ok
                    }
            }''',
            context_value={'user': self.user},
            variable_values={'id', self.notebook_id}
        ))

    def test_delete_notebook(self):
        """Test for deleting notebook"""
        self.assertMatchSnapshot(self.client.execute(
            '''mutation {
                deleteNotebook(
                    id : $id
                    ){
                        ok
                    }
            }''',
            context_value={'user': self.user},
            variable_values={'id', self.notebook_id}
        ))

if __name__ == '__main__':
    unittest.main()
