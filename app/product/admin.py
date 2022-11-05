from django.contrib import admin

from .models import Product, CartProduct

class ProductAdmin(admin.ModelAdmin):
    list_display=('name','description','image','price')
    list_filter = ('name', 'price')

class CartProductAdmin(admin.ModelAdmin):
    list_display=('product', 'count')

admin.site.register(Product, ProductAdmin)
admin.site.register(CartProduct, CartProductAdmin)