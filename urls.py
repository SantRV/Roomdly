"""RoomdlyProject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
import RoomdlyApp.views 
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', RoomdlyApp.views.index, name='index'),
    path('home', RoomdlyApp.views.home, name='home'),
    path('explore', RoomdlyApp.views.explore, name='explore'),
    path('shortlist', RoomdlyApp.views.shortlist, name='shortlist'),
    path('messages', RoomdlyApp.views.messages, name='messages'),
    path('analytics', RoomdlyApp.views.analytics, name='analytics'),
    path('analytics_management', RoomdlyApp.views.analyticsManagement, name='analyticsManagement'),
    path('listings', RoomdlyApp.views.listings, name='listings'),
    path('login', RoomdlyApp.views.login, name='login'),
    path('create_listing', RoomdlyApp.views.createListing, name='createListing'),

] + static (settings.STATIC_URL, documen_root = settings.STATIC_ROOT)
