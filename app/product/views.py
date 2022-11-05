from django.shortcuts import render
from .models import Product
from django.http import HttpResponse
from django.template import loader

def index(request):
    template = loader.get_template('product/index.html')
    product_list = Product.objects.order_by('-id').all()
    return HttpResponse(template.render({'product_list': product_list}, request))