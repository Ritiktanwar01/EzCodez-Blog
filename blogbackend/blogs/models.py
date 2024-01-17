from django.db import models

# Create your models here.

class Blog(models.Model):
    image = models.ImageField(upload_to='media/blog_image/')
    tittle = models.CharField(max_length = 24)
    desc = models.CharField(max_length = 800)
    def __str__(self):
        return self.tittle


class project(models.Model):
    image = models.ImageField(upload_to='media/blog_image/')
    tittle = models.CharField(max_length = 24)
    githublink = models.CharField(max_length=800)
    goggledrivelink = models.CharField(max_length=800)
    zipfilelink = models.CharField(max_length=800)
    filelink = models.CharField(max_length=800)
    def __str__(self):
        return self.tittle

class contact(models.Model):
    name = models.CharField(max_length=28)
    mobile = models.CharField(max_length=12)
    email = models.CharField(max_length=120)
    messege = models.CharField(max_length=200)
    def __str__(self):
        return self.name