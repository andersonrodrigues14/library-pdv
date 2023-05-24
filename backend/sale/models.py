from django.db import models

class products(models.Model):
    code = models.AutoField(primary_key=True)
    description = models.TextField(blank=False, null=False)
    value = models.DecimalField(max_digits=9, decimal_places=2, blank=False, null=False)
    percent_commission = models.DecimalField(max_digits=9, decimal_places=2,blank=False, null=False)

