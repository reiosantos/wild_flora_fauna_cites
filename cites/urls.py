from django.urls import path

from .views import ping, read_csv_file


app_name = "cites"


urlpatterns = [
    path('ping/', ping, name="ping"),
    path('read_csv', read_csv_file, name="read_csv"),
]
