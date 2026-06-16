from django.contrib import admin
from .models import Quiz, Question, QuizSubmission


admin.site.register(Quiz)
admin.site.register(Question)
admin.site.register(QuizSubmission)