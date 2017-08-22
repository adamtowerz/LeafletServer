"""
Filtering methods for authentication
"""

def resolve_models(context, obj):
    """
    Retrieve list of objects
    """
    if not context.user.is_authenticated():
        return obj.objects.none()
    return obj.objects.filter(owner=context.user)

def get_node(pk, context, model):
    """
    Fetch node of an object
    """
    try:
        obj = model.objects.get(pk=pk)
    except model.DoesNotExist:
        return None

    if context.user == obj.owner:
        return obj
    return None
