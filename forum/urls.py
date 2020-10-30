from django.urls import path, re_path
from django.views.generic import TemplateView

app_name = 'forum'

urlpatterns = [
    re_path('.*/', TemplateView.as_view(template_name="index.html")),
]
