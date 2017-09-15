"""
Schema for LeafletServer
"""

import graphene
import LeafletServer.notebooks.schema
import LeafletServer.sections.schema
import LeafletServer.leaflets.schema
import LeafletServer.leaves.schema

class Query(LeafletServer.notebooks.schema.Query,
            LeafletServer.sections.schema.Query,
            LeafletServer.leaflets.schema.Query,
            LeafletServer.leaves.schema.Query,
            graphene.ObjectType):
    """
    This class inherits schema from models
    """
    pass

class Mutation(LeafletServer.notebooks.schema.Mutation,
               LeafletServer.sections.schema.Mutation,
               LeafletServer.leaflets.schema.Mutation,
               LeafletServer.leaves.schema.Mutation,
               graphene.ObjectType):
    """
    This class inherits notebooks' schema
    """
    pass

schema = graphene.Schema(query=Query, mutation=Mutation)
