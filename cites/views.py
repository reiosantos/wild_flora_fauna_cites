from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view()
def ping(request):
    response_object = {
        "status": "success",
        "message": "pong"
    }
    return Response(response_object)
