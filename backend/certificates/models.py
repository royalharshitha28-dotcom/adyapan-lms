from django.db import models
from django.conf import settings
from courses.models import Course


class Certificate(models.Model):

    student = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )

    course = models.ForeignKey(
        Course,
        on_delete=models.CASCADE
    )

    certificate_id = models.CharField(
        max_length=100,
        unique=True
    )

    issued_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.certificate_id