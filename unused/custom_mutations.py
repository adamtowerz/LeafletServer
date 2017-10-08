"""
Custom reusable mutations
"""

import graphene
from LeafletServer import auth_filter

class DeleteModel(graphene.Mutation):
    """
    Mutation for deleting a Model
    """
    def __init__(self, model, *args, **kwargs):
        super(DeleteModel, self).__init__(*args, **kwargs)
        self.model = model
        print("------------------------------------")
        print(self.model)
        print("------------------------------------")

    class Arguments:
        """
        Input Class
        """
        id = graphene.Int(required=True)

    ok = graphene.Boolean()

    def mutate(self, info, id): #pylint:disable=unused-argument, too-many-arguments, redefined-builtin
        """
        Mutate Model
        """
        print("------------------------------------")
        print(self.model)
        print("------------------------------------")
        model = auth_filter.resolve_model(info, id, None, self.model)
        if model is None:
            return None
        model.delete()
        ok = True

        return DeleteModel(ok=ok) #pylint:disable=no-value-for-parameter
