from rest_framework import generics
from .models import Video, VideoMetrics
from .serializers import VideoSerializer, VideoMetricsSerializer

class VideoListCreateView(generics.ListCreateAPIView):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer

class VideoDetailView(generics.RetrieveAPIView):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer

class VideoMetricsView(generics.RetrieveAPIView):
    queryset = VideoMetrics.objects.all()
    serializer_class = VideoMetricsSerializer


import os
from django.http import StreamingHttpResponse, Http404
from django.shortcuts import get_object_or_404
from .models import Video
from wsgiref.util import FileWrapper
from urllib.parse import urlparse
import requests
from django.conf import settings
from .models import VideoMetrics
import time

def stream_video(request, video_id):
    video = get_object_or_404(Video, pk=video_id)
    video_source = video.get_video_source()

    # Update metrics for the video
    metrics, created = VideoMetrics.objects.get_or_create(video=video)
    metrics.total_views += 1
    metrics.save()

    start_time = time.time()

    if video.video_file:
        file_path = video.video_file.path
        file = open(file_path, 'rb')
        response = StreamingHttpResponse(FileWrapper(file), content_type='video/mp4')
        response['Content-Length'] = os.path.getsize(file_path)

    elif video.video_url:
        response = requests.get(video.video_url, stream=True)
        response.raise_for_status()
        response = StreamingHttpResponse(response.iter_content(chunk_size=8192),
                                         content_type="video/mp4")

    else:
        raise Http404("Video not found")

    # Track watch time
    def close_streaming_response():
        watch_time = time.time() - start_time
        metrics.total_watch_time += int(watch_time)
        metrics.save()

    response.close = close_streaming_response

    return response
