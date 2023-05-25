from django.db import models

class Product(models.Model):
    code = models.AutoField(primary_key=True)
    description = models.TextField(blank=False, null=False)
    value = models.DecimalField(max_digits=9, decimal_places=2, blank=False, null=False)
    percent_commission = models.DecimalField(max_digits=9, decimal_places=2,blank=False, null=False)

    def __str__(self):
        return f'{self.code} - {self.description}'


class Client(models.Model):
    name = models.CharField(blank=False, null=False, max_length=50)
    email = models.EmailField(blank=False, null=False)
    telephone = models.CharField(max_length=30,  blank=True, null=True)
    
    def __str__(self):
        return f'{self.id} - {self.name}'

class Seller(models.Model):
    name = models.CharField(blank=False, null=False, max_length=50)
    email = models.EmailField(blank=False, null=False)
    telephone = models.CharField(max_length=30, blank=True, null=True)
    
    def __str__(self):
        return f'{self.id} - {self.name}'

class Sale(models.Model):
    note_number = models.IntegerField(blank=False, null=False)
    date = models.DateTimeField(auto_now_add=True)
    client = models.ForeignKey(
        to=Client,
        on_delete =models.CASCADE,
        related_name ='Client',
        null = True,
        blank = True
    )
    seller = models.ForeignKey(
        to=Seller,
        on_delete =models.CASCADE,
        related_name ='Sellers',
        null = True,
        blank = True
    )

    def __str__(self):
        return f'{self.note_number}'


class SaleItem(models.Model):
    saleNumber = models.ForeignKey(
        to=Sale,
        on_delete =models.CASCADE,
        related_name ='SaleItem',
        null = False,
        blank = False
    )
    product = models.ForeignKey(
        to=Product,
        on_delete =models.CASCADE,
        related_name ='Product',
        null = False, 
        blank = False
    )
    quantity = models.IntegerField(blank=False, null=False, default=0)

    def __str__(self):
        return f'{self.saleNumber} - {self.quantity}'


