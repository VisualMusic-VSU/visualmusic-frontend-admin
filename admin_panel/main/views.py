from django.shortcuts import render


def login(request):
    return render(request, 'main/login.html')


def users(request):
    return render(request, 'main/users.html')


def covers(request):
    return render(request, 'main/covers.html')
