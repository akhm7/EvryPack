# Generated by Django 4.1.3 on 2022-11-05 10:38

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("product", "0003_remove_product_count_product_description_cartproduct"),
        ("cart", "0002_cart_products"),
    ]

    operations = [
        migrations.AddField(
            model_name="cart",
            name="date",
            field=models.DateTimeField(
                blank=True, default=datetime.datetime(2022, 11, 5, 15, 38, 24, 359276)
            ),
        ),
        migrations.AlterField(
            model_name="cart",
            name="products",
            field=models.ManyToManyField(blank=True, to="product.cartproduct"),
        ),
    ]