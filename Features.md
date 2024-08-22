# ViewBox: Video Streaming MVP

## Project Description

**ViewBox** is a minimal viable product (MVP) for a video streaming application, designed to provide basic features akin to platforms like Netflix or YouTube. The MVP focuses on video streaming using Django Channels RestFramework and video processing with FFmpeg. The project aims to allow users to stream or watch videos using a provided video URL, while collecting and analyzing user interaction metrics such as average watch time, most played sections, skipped sections, and more.

This project is built with a Django backend and a ReactJS frontend. The MVP is intended to be lightweight, with the possibility of expanding to include detailed user management and more advanced features in the future.

## Core Features

### 1. Video Streaming
- **Django Channels Integration:** Utilizes Django Channels to handle real-time video streaming.
- **FFmpeg Processing:** Leverages FFmpeg for video processing, including transcoding videos into streaming-friendly formats.
- **Video URL Handling:** Allows users to input a video URL for streaming.

### 2. Frontend with ReactJS
- **Video Player Integration:** Implements a video player using ReactJS, with libraries like Video.js or react-player.
- **Real-time Metrics Collection:** Captures video interaction events (play, pause, seek, etc.) for metric analysis.
- **Minimalistic UI/UX:** Focuses on delivering a simple and user-friendly interface.

### 3. Metrics Collection and Analysis
- **Average Watch Time:** Calculates the total watch time for each video.
- **Most Played Sections:** Tracks the segments of the video that users replay most frequently.
- **Skipped Sections:** Identifies and records sections that users skip over.
- **Additional Metrics:** Collects data on buffering events, pause frequency, and playback speed adjustments.

### 4. Backend Setup
- **Asynchronous Handling with Django Channels:** Handles asynchronous requests essential for streaming.
- **WebSocket Communication:** Uses WebSockets for real-time updates and communication between the server and client.
- **API Endpoints:** Provides endpoints for video streaming and metrics data retrieval.

### 5. Data Storage
- **Video Metadata:** Stores metadata such as video title, URL, and duration in the database.
- **User Interaction Data:** Saves metrics data based on user interactions for later analysis.

### 6. Scalability and Security
- **Future Authentication:** Prepares for JWT-based authentication to secure video streams.
- **Scalability Considerations:** Designs the backend to support scaling, including load balancing and CDN usage in future versions.

## Future Enhancements
- **Detailed User Management:** Incorporating user profiles, authentication, and personalized video recommendations.
- **Enhanced Analytics:** Advanced metrics and reporting, including engagement scores and heatmaps.
- **Content Delivery Network (CDN) Integration:** Improving streaming performance and scalability.
- **Mobile and TV App Versions:** Extending the platform to support mobile devices and smart TVs.

## Development and Deployment
- **Local Development Environment:** Utilizes Docker for a consistent and portable development environment.
- **Testing:** Includes unit tests for backend components and integration tests for React frontend.
- **Deployment:** Cloud deployment strategies, including CI/CD pipelines for continuous integration and delivery.
