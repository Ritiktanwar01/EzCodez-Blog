# from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import *
from .models import *

# Create your views here.

@api_view(['get'])
def blogdata(request):
    blogs = Blog.objects.all()
    data = blogSerializer(blogs, many = True)
    return Response({'status':200,'data':data.data})

@api_view(['get'])
def codedata(request):
    blogs = project.objects.all()
    data = codeSerializer(blogs, many = True)
    return Response({'status':200,'data':data.data})

@api_view(['post'])
def contactform(request):
    name = request.data['name']
    phone = request.data['mobile']
    email = request.data['email']
    messege = request.data['messege']
    data = contact(name = name,email = email, mobile = phone, messege = messege)
    data.save()
    return Response({'status':200,'data':'success'})