from rest_framework import serializers
from sale.models import Product, Client, Seller, Sale, SaleItem

class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = '__all__'

class SellerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seller
        fields = '__all__'

class SaleListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sale
        fields = '__all__'

class SaleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sale
        fields = '__all__'

class SaleItensSerializer(serializers.ModelSerializer):
    class Meta:
        model = SaleItem
        fields = '__all__'