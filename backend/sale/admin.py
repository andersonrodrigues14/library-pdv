from django.contrib import admin

from sale.models import Products


class ProductsAdmin(admin.ModelAdmin):
    list_display = ('code', 'description', 'value', 'percent_commission')
    search_fields = ('code', 'description',)


admin.site.register(Products, ProductsAdmin)
