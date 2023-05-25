from django.contrib import admin
from django.urls import path
from sale.views import ProdyctsAPI, ClientAPI, SellerAPI, SaleListAPI, SaleAPI, SaleItensAPI

urlpatterns = [
    path('admin/', admin.site.urls),
    path('products/', ProdyctsAPI.as_view()),
    path('clients/', ClientAPI.as_view()),
    path('sellers/', SellerAPI.as_view()),
    path('salesList/', SaleListAPI.as_view()),
    path('sale/<p>/', SaleAPI.as_view()),
    path('salesItens/<p>/',SaleItensAPI.as_view())
]
