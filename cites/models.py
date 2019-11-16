from django.contrib.postgres.fields import ArrayField
from django.db import models


class TaxonConcept(models.Model):
    taxon_id = models.IntegerField()
    kingdom = models.CharField(max_length=100, null=True, blank=True)
    scientific_name = models.CharField(max_length=100)
    appendix = models.CharField(max_length=5)
    author = models.CharField(max_length=100)
    country_distribution = ArrayField(models.CharField(max_length=100), blank=True)
    distribution_iso_codes = ArrayField(models.CharField(max_length=10), blank=True)

    def __str__(self):
        return str(self.taxon_id)
