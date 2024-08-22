import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import config from '../config';

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await axios.get(`${config.backendUrl}/api/videos/`);
        const data = response.data;

        if (data && Array.isArray(data.results)) {
          setVideos(data.results);
        } else {
          console.error('Expected results to be an array, but got:', data);
          setError('Unexpected response format from server.');
        }
      } catch (error) {
        setError('There was an error fetching the videos. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) return <p>Loading videos...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h2>Video List</h2>
      <ul>
        {videos.map((video) => (
          <li key={video.id}>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
            <Link to={`/videos/${video.id}`}>Watch Video</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoList;
