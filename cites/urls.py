from django.urls import path

from .views import ping


app_name = "cites"


urlpatterns = [
    path('ping/', ping, name="ping"),
]
