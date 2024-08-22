import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VideoUpload from './components/VideoUpload';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>ViewBox</h1>
        <Routes>
          <Route path="/" element={<VideoUpload />} />
          <Route path="/videos" element={<VideoList />} />
          <Route path="/videos/:id" element={<VideoPlayer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
