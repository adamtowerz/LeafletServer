"""
Filtering methods for authentication
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
