
# ViewBox

ViewBox is a minimal viable product (MVP) for a video streaming application, inspired by platforms like Netflix and YouTube. This project allows users to upload videos, stream them, and track various metrics such as watch time, most played sections, and skipped sections.

## Project Structure

```
ViewBox_Platform/
├── venv/                   # Python virtual environment
├── viewbox/                # Django backend project directory
│   ├── manage.py           # Django project management script
│   ├── db.sqlite3          # SQLite database (for development)
│   ├── static/             # Static files (CSS, JavaScript, etc.)
│   ├── streaming/          # Django app handling video streaming
│   └── ...                 # Other Django project files
├── viewbox-frontend/       # React frontend project directory
│   ├── node_modules/       # Node.js dependencies
│   ├── public/             # Public assets
│   ├── src/                # React source files
│   └── ...                 # Other React project files
├── .gitignore             # For ignorables
├── Features.md             # Project features description
└── README.md               # Project README (this file)
```

## Features

- **Video Upload:** Users can upload videos or provide a video URL.
- **Video Streaming:** Stream videos directly from the provided URL or uploaded files.
- **Metrics Tracking:** Track metrics like total views, total watch time, most played sections, and skipped sections.
- **React Frontend:** A user-friendly interface to upload, list, and stream videos.
- **Django Backend:** A robust backend built with Django, handling video processing, streaming, and metrics storage.

## Getting Started

### Prerequisites

- **Python 3.x** (for Django backend)
- **Node.js & npm** (for React frontend)
- **Git** (for version control)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/nomannayeem/ViewBox.git
   cd ViewBox_Platform
   ```

2. **Set Up the Python Virtual Environment:**

   ```bash
   python -m venv venv
   source venv/bin/activate   # On Windows: venv\Scripts\activate
   ```

3. **Install Python Dependencies:**

   ```bash
   pip install -r viewbox/requirements.txt
   ```

4. **Set Up the Django Backend:**

   - **Run Migrations:**

     ```bash
     cd viewbox
     python manage.py migrate
     ```

   - **Create a Superuser:**

     ```bash
     python manage.py createsuperuser
     ```

   - **Run the Development Server:**

     ```bash
     python manage.py runserver
     ```

5. **Set Up the React Frontend:**

   - **Install Node.js Dependencies:**

     ```bash
     cd ../viewbox-frontend
     npm install
     ```

   - **Run the React Development Server:**

     ```bash
     npm start
     ```

6. **Access the Application:**

   - **Django Backend:** `http://localhost:8000/admin/` (for admin interface)
   - **React Frontend:** `http://localhost:3001/` (or the specified port)

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss your ideas.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or issues, please contact [nomannayeem](https://github.com/nomannayeem/).
