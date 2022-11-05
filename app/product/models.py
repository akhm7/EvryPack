from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=32)
    description = models.TextField(blank=True)
    image = models.ImageField(blank=False)
    price = models.DecimalField(default=0.00, max_digits=10, decimal_places=2)

    def __str__(self):
        return str(self.name)

class CartProduct(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    count = models.IntegerField(default=1, validators=[MinValueValidator(1), MaxValueValidator(5)])

    def __str__(self):
        return str(self.product.name + " x " + str(self.count))