import re
from django.shortcuts import render
from django.shortcuts import redirect

# Roomdly views
def index(request):
    return render(request, 'models/index.html')

def home(request):
    response = redirect('/')
    return response

def explore(request):
    return render(request, 'models/explore.html')

def shortlist(request):
    return render(request, 'models/shortlist.html')

def messages(request):
    return render(request, 'models/messages.html')

def analytics(request):
    return render(request, 'models/analytics.html')

def analyticsManagement(request):
    return render(request, 'models/analytics_management.html')

def listings(request):
    return render(request, 'models/listings.html')

def login(request):
    return render(request, 'models/login.html')

def createListing(request):
    return render(request, 'models/create_listing.html')
