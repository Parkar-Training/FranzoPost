from django.db import models

# Create your models here.



class Post(models.Model):

    PId = models.AutoField(primary_key=True)
    PuserId= models.IntegerField(blank=False,error_messages={"required":"enter user id"})
    Post_Time = models.DateTimeField(auto_now=True)
    Like_count = models.IntegerField(default=0, blank=True)
    #Comment = models.CharField(max_length=40)
    Post_data = models.CharField(max_length=80, blank=False,error_messages={"required":"Post content cannot be blank"})