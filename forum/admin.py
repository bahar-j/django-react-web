from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin
from . import models

class BoardPostAdmin(SummernoteModelAdmin):
    exclude = ('slug',)
    list_display = ('title', 'id', 'status', 'board', 'published')
    list_display_links = ('id', 'title')
    search_fields = ('title',)
    list_per_page = 25
    summernote_fields = ('content',)

admin.site.register(models.Post, BoardPostAdmin)
admin.site.register(models.Board)
admin.site.register(models.Comment)
