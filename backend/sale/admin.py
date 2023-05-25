from django.contrib import admin

from sale.models import Product, Seller, Client, Sale, SaleItem


class ProductsAdmin(admin.ModelAdmin):
    list_display = ('code', 'description', 'value', 'percent_commission')
    search_fields = ('code', 'description',)


admin.site.register(Product, ProductsAdmin)

class SellerAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'telephone')
    search_fields = ('name',)

admin.site.register(Seller, SellerAdmin)

class ClientAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'telephone')
    search_fields = ('name',)

admin.site.register(Client, ClientAdmin)


#TESTES
class SaleAdmin(admin.ModelAdmin):
    list_display = ('note_number', 'date', 'client', 'seller')
    search_fields = ('note_number', 'date',)

admin.site.register(Sale, SaleAdmin)

class SaleItemAdmin(admin.ModelAdmin):
    list_display = ('saleNumber', 'product','quantity')
    search_fields = ('saleNumber', 'product',)

admin.site.register(SaleItem, SaleItemAdmin)
