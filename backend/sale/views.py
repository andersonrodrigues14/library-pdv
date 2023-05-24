from django.shortcuts import render
from rest_framework.views import APIView, Response
from rest_framework.status import HTTP_200_OK
from sale.models import Products
from sale.serializer import ProductsSerializer


class ProdyctsAPI(APIView):
    def get(self, request, format=None):
        products = Products.objects.all()
        serializer = ProductsSerializer(products, many=True)

        return Response(serializer.data, status=HTTP_200_OK)