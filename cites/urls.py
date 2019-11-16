from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import ping, read_csv_file, TaxonConceptViewSet


app_name = "cites"

router = DefaultRouter()
router.register(r'taxon_concepts', TaxonConceptViewSet)


urlpatterns = [
    path('ping/', ping, name="ping"),
    path('read_csv', read_csv_file, name="read_csv"),
]

urlpatterns += router.urls
