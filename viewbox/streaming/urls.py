from django.urls import path
from .views import VideoListCreateView, VideoDetailView, stream_video, VideoMetricsView

urlpatterns = [
    path('videos/', VideoListCreateView.as_view(), name='video-list-create'),
    path('videos/<int:pk>/', VideoDetailView.as_view(), name='video-detail'),
    path('videos/<int:video_id>/stream/', stream_video, name='video-stream'),
    path('videos/<int:video_id>/metrics/', VideoMetricsView.as_view(), name='video-metrics'),
]
