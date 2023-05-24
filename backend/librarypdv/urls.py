from django.contrib import admin
from django.urls import path
from sale.views import ProdyctsAPI

urlpatterns = [
    path('admin/', admin.site.urls),
    path('products/', ProdyctsAPI.as_view())
]
