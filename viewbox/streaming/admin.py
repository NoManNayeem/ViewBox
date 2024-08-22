from django.contrib import admin
from .models import Video, VideoMetrics

@admin.register(Video)
class VideoAdmin(admin.ModelAdmin):
    list_display = ('title', 'uploaded_at')
    search_fields = ('title',)
    list_filter = ('uploaded_at',)



@admin.register(VideoMetrics)
class VideoAdmin(admin.ModelAdmin):
    list_display = ('total_views',)