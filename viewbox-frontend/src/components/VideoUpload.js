import React, { useState } from 'react';
import axios from 'axios';
import config from '../config';

const VideoUpload = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [videoFile, setVideoFile] = useState(null);
  const [videoURL, setVideoURL] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (videoFile) {
      formData.append('video_file', videoFile);
    } else if (videoURL) {
      formData.append('video_url', videoURL);
    }

    try {
      const response = await axios.post(`${config.backendUrl}/api/videos/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 201) {
        setUploadSuccess(true);
        setTitle('');
        setDescription('');
        setVideoFile(null);
        setVideoURL('');
      }
    } catch (error) {
      setError('There was an error uploading the video. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Upload a Video</h2>
      {uploadSuccess && <p>Video uploaded successfully!</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleUpload}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Video File:</label>
          <input type="file" onChange={handleFileChange} />
        </div>
        <div>
          <label>Or Video URL:</label>
          <input
            type="url"
            value={videoURL}
            onChange={(e) => setVideoURL(e.target.value)}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Uploading...' : 'Upload Video'}
        </button>
      </form>
    </div>
  );
};

export default VideoUpload;
