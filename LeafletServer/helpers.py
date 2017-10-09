"""
Custom reusable helper code
"""

"""
class DeleteModel(graphene.Mutation):
    #Mutation for deleting a Model
    def __init_subclass_with_meta__(cls, model, resolver=None, output=None,
    arguments=None,
                                    _meta=None, **options):
        super(DeleteModel, cls).__init_subclass_with_meta__(cls, model,
        resolver=None, output=None)
        print("------------------------------------")
        print(cls)
        print("------------------------------------")

    class Arguments:
        #Input Class
        id = graphene.Int(required=True)

    ok = graphene.Boolean()

    @classmethod
    def mutate(cls, root, info, id): #pylint:disable=unused-argument,
        too-many-arguments, redefined-builtin
        #Mutate Model
        print("------------------------------------")
        print(cls)
        print("------------------------------------")
        model = auth_filter.resolve_model(info, id, None, cls.model)
        if model is None:
            return None
        model.delete()
        ok = True

        return DeleteModel(ok=ok) #pylint:disable=no-value-for-parameter
"""

def resolve_model(info, id, title, model): #pylint: disable=redefined-builtin
    """
    Retrieve single objects
    """

    if id is not None:
        try:
            obj = model.objects.get(id=id)
        except model.DoesNotExist:
            return None
    elif title is not None:
        try:
            obj = model.objects.get(title=title)
        except model.DoesNotExist:
            return None
    else:
        return None

    if info.context.user == obj.owner:
        return obj
    return None

def resolve_models(info, obj):
    """
    Retrieve list of objects
    """
    if not info.context.user.is_authenticated():
        return obj.objects.none()
    return obj.objects.filter(owner=info.context.user)

def mutate_model(info, id, model, arg, arg_name): #pylint: disable=redefined-builtin
    """
    Mutates a model with a given argument and argument name
    """
    obj = resolve_model(info, id, None, model)
    if obj is None:
        return None
    obj[arg_name] = arg
    print(obj)

    obj.save()
    return obj

def delete_model(info, id, model): #pylint: disable=redefined-builtin
    """
    Deletes a model
    """
    obj = resolve_model(info, id, None, model)
    if obj is None:
        return None
    obj.delete()

    return True
