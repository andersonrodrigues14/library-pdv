from rest_framework import serializers
from sale.models import Product

class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'