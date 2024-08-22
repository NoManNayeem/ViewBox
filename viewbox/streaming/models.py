from django.db import models
from django.urls import reverse

class Video(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    video_file = models.FileField(upload_to='videos/', blank=True, null=True)
    video_url = models.URLField(blank=True, null=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    def get_video_source(self):
        if self.video_file:
            return self.video_file.url
        else:
            return self.video_url

    def get_shareable_url(self):
        return reverse('video-stream', args=[self.id])



class VideoMetrics(models.Model):
    video = models.ForeignKey(Video, on_delete=models.CASCADE, related_name='metrics')
    total_views = models.PositiveIntegerField(default=0)
    total_watch_time = models.PositiveIntegerField(default=0)  # in seconds
    most_played_section = models.CharField(max_length=255, blank=True, null=True)  # e.g., "00:30-01:00"
    skipped_sections = models.TextField(blank=True, null=True)  # e.g., "00:15-00:20, 01:30-01:45"

    def __str__(self):
        return f"Metrics for {self.video.title}"
