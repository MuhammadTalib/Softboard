from django.db import models


class Classes(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=120)
    teacher_name = models.CharField(max_length=120)

    def _str_(self):
        return self.name
