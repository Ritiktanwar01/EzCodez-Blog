from django.contrib import admin
from .models import *
# Register your models here.

admin.site.site_header ="DesiCodez Blog"
admin.site.register(Blog)
admin.site.register(project)
admin.site.register(contact)