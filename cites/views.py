import csv

from rest_framework import filters, viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import TaxonConcept
from .serialiezers import TaxonConceptSerializer


@api_view()
def ping(request):
    response_object = {
        "status": "success",
        "message": "pong"
    }
    return Response(response_object)

@api_view()
def read_csv_file(self):
    with open("cites_listings.csv", mode="r") as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        line_count = 0
        for row in csv_reader:
            if line_count == 0:
                print(f'Column names are {", ".join(row)}')
                line_count += 1
            else:
                # print("countries: ", row[19].split(","))
                _, created = TaxonConcept.objects.update_or_create(
                    taxon_id=row[0],
                    kingdom=row[1],
                    scientific_name=row[9],
                    appendix=row[12],
                    author=row[10],
                    country_distribution=row[19].split(","),
                    distribution_iso_codes=row[18].split(",")
                )
    return Response({"status": "success"})


class TaxonConceptViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing(listing) taxon concept instances.
    """
    queryset = TaxonConcept.objects.all()
    serializer_class = TaxonConceptSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['scientific_name']
