from django.db import models
from django.contrib.auth.models import User
from product.models import CartProduct
from datetime import datetime

class Cart(models.Model):
    class CartStatus(models.TextChoices):
        NEW = 'NEW',
        FINISH = 'FINISH',
        CANCEL = 'CANCEL',

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    products = models.ManyToManyField(CartProduct, blank=True)
    status = models.CharField(
        max_length=16,
        choices=CartStatus.choices,
        default=CartStatus.NEW,
    )
    date = models.DateTimeField(default=datetime.now(), blank=True)

    def __str__(self):
        return str(self.id)