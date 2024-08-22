import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import config from '../config';

const VideoPlayer = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchVideo = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await axios.get(`${config.backendUrl}/api/videos/${id}/`);
        setVideo(response.data);
      } catch (error) {
        setError('There was an error loading the video. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, [id]);

  if (loading) return <p>Loading video...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!video) return null;

  return (
    <div>
      <h2>{video.title}</h2>
      <p>{video.description}</p>
      <video className="video-player" controls>
        <source src={video.shareable_url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
