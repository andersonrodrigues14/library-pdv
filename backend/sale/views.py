from django.shortcuts import render
from rest_framework.views import APIView, Response
from rest_framework.status import HTTP_200_OK
from sale.models import Product, Client, Seller, Sale, SaleItem
from sale.serializer import ProductsSerializer, ClientSerializer, SellerSerializer, SaleListSerializer, SaleSerializer,SaleItensSerializer
from IPython import embed

class ProdyctsAPI(APIView):
    def get(self, request, format=None):
        products = Product.objects.all()
        serializer = ProductsSerializer(products, many=True)

        return Response(serializer.data, status=HTTP_200_OK)
    
class ClientAPI(APIView):
    def get(self, request, format=None):
        clients = Client.objects.all()
        serializer = ClientSerializer(clients, many=True)

        return Response(serializer.data, status=HTTP_200_OK)
    
class SellerAPI(APIView):
    def get(self, request, format=None):
        sellers = Seller.objects.all()
        serializer = SellerSerializer(sellers, many=True)

        return Response(serializer.data, status=HTTP_200_OK)

class SaleListAPI(APIView):
    def get(self, request, format=None):
        seles = Sale.objects.all()
        serializer = SaleListSerializer(seles, many=True)

        return Response(serializer.data, status=HTTP_200_OK)
    
class SaleAPI(APIView):
    def get(self, request, p, format=None):
        sale = Sale.objects.filter(id=p)
        serializer = SaleSerializer(sale, many=True)

        return Response(serializer.data, status=HTTP_200_OK)

    
class SaleItensAPI(APIView):
    def get(self, request, p, format=None):
        saleItens = SaleItem.objects.filter(saleNumber=p)
        serializer = SaleItensSerializer(saleItens, many=True)

        return Response(serializer.data, status=HTTP_200_OK)
    

