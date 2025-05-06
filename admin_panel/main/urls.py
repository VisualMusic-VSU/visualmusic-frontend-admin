from django.urls import path
from . import views

urlpatterns = [
    path('', views.login, name='login'),
    path('users/', views.users, name='users'),
    path('covers/', views.covers, name='covers'),
]