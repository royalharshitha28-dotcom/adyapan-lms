from django.contrib import admin
from django.urls import path, include

from rest_framework.routers import DefaultRouter

from courses.views import CourseViewSet
from lessons.views import LessonViewSet
from enrollments.views import EnrollmentViewSet
from quizzes.views import QuizViewSet
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
router = DefaultRouter()

router.register(
    'courses',
    CourseViewSet
)

router.register(
    'lessons',
    LessonViewSet
)

router.register(
    'enrollments',
    EnrollmentViewSet
)

router.register(
    'quizzes',
    QuizViewSet
)

urlpatterns = [
    path(
    'api/token/',
    TokenObtainPairView.as_view(),
    name='token_obtain_pair'
),

path(
    'api/token/refresh/',
    TokenRefreshView.as_view(),
    name='token_refresh'
),

    path(
        'admin/',
        admin.site.urls
    ),

    path(
        'api/',
        include(router.urls)
    ),
    path(
    'api/accounts/',
    include('accounts.urls')
),
]