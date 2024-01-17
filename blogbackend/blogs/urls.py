from django.urls import path
from .views import *

urlpatterns = [
    path('blogdata',blogdata),
    path('project',codedata),
    path('contact',contactform)
]