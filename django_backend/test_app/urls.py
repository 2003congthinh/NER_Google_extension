from django.urls import path
from . import views
from . import ner
from . import take_text

urlpatterns = [
    #path('test_app/hello', views.say_hello) - If there are no configuration that have a url route led to this app 
    #in the urls.py of the project folder, then in the urls.py of the app folder should include the route led to the app
    path('hello/', views.say_hello),
    path('ner/', ner.say_hello),
    path('take_text/', take_text.receive_text)
]