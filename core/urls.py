from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls import url
from django.conf.urls.static import static
from django.views.generic import TemplateView
from forum_api.views import PostList, PostDetail

# routes = getattr(settings, 'REACT_ROUTES', [])

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name="index.html")),
    path('api/', PostList.as_view(), name='listcreate'),
    path('api/<int:pk>', PostDetail.as_view(), name='detailcreate'),
    path('summernote/', include('django_summernote.urls')),
    # Put this at the end! This way, Django tries all 
    # its API URLs and if it doesn't find anything it
    # redirects to the frontend
    path('', include('forum.urls', namespace="forum")),
] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
