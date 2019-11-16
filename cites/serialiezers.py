from rest_framework import serializers

from .models import TaxonConcept


class TaxonConceptSerializer(serializers.ModelSerializer):

    class Meta:
        model = TaxonConcept
        fields = "__all__"
