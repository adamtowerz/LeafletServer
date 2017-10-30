"""Tests for graphiql endpoints"""

from snapshottest import TestCase
from graphene.test import Client
from LeafletServer.notebooks import schema

class APITestCase(TestCase):
    """Tests API for graphql"""
    def test_api_graphql(self):
        """Testing the API for /graphql"""
        client = Client(my_schema)
        self.assertMatchSnapshot(client.execute('''{ hey }'''))
