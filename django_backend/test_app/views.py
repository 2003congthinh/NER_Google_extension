from django.shortcuts import render
from django.shortcuts import HttpResponse

# Create your views here.
def say_hello(request):
    return HttpResponse('Hello World')