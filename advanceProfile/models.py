from django.db import models

from django.db import models

class Adv_prof(models.Model):
    userId = models.AutoField
    About_me = models.CharField(max_length=25, blank=True)
    Interest = models.CharField(max_length=25, blank=True)
    Hobbies = models.CharField(max_length=20, blank=True)
    Activities = models.CharField(max_length=20, blank=True)
    Location = models.CharField(max_length=20, blank=True)


from django.db import models
