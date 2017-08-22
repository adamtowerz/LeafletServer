"""
Filtering methods for authentication
"""

def resolve_model(args, context, model):
    """
    Retrieve single objects
    """
    pk = args.get('id')
    title = args.get('title')

    if pk is not None:
        try:
            obj = model.objects.get(pk=pk)
        except model.DoesNotExist:
            return None
    elif title is not None:
        try:
            obj = model.objects.get(title=title)
        except model.DoesNotExist:
            return None
    else:
        return None

    if context.user == obj.owner:
        return obj
    return None

def resolve_models(context, obj):
    """
    Retrieve list of objects
    """
    if not context.user.is_authenticated():
        return obj.objects.none()
    return obj.objects.filter(owner=context.user)
