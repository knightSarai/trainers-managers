from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('frontend.urls')),
    path('', include('trainers.urls')),
    path('admin/', admin.site.urls),
    
]
