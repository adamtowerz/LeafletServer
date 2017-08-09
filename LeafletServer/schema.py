"""
Schema for LeafletServer
"""

import graphene
import LeafletServer.notebooks.schema

class Query(LeafletServer.notebooks.schema.Query, graphene.ObjectType):
    """
    This class inherits notebooks' schema
    """
    pass

schema = graphene.Schema(query=Query)
