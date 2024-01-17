from rest_framework.serializers import ModelSerializer
from .models import *

class blogSerializer(ModelSerializer):
    class Meta:
        model = Blog
        fields = "__all__"
        
class codeSerializer(ModelSerializer):
    class Meta:
        model = project
        fields = "__all__"