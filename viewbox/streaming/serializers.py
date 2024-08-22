from rest_framework import serializers
from .models import Video, VideoMetrics

class VideoSerializer(serializers.ModelSerializer):
    shareable_url = serializers.SerializerMethodField()

    class Meta:
        model = Video
        fields = ['id', 'title', 'description', 'video_file', 'video_url', 'uploaded_at', 'shareable_url']

    def get_shareable_url(self, obj):
        request = self.context.get('request')
        if request:
            return request.build_absolute_uri(obj.get_shareable_url())
        return obj.get_shareable_url()

    def validate(self, data):
        if not data.get('video_file') and not data.get('video_url'):
            raise serializers.ValidationError("Either a video file or a video URL must be provided.")
        return data



class VideoMetricsSerializer(serializers.ModelSerializer):
    class Meta:
        model = VideoMetrics
        fields = ['total_views', 'total_watch_time', 'most_played_section', 'skipped_sections']
