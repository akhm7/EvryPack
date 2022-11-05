from django.contrib import admin

from .models import Cart

class CartAdmin(admin.ModelAdmin):
    list_display=('user', 'status', 'date')
    list_filter = ('user', 'status')

admin.site.register(Cart, CartAdmin)