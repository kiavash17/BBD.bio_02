# Flow Cytometry Analysis Tool

## Project Overview
The Flow Cytometry Analysis Tool is a web-based platform designed to simplify the analysis of flow cytometry `.fcs` data. Users can upload their `.fcs` files, and the tool provides AI-based gating analysis and interactive visualizations.

## Features
- **File Upload**: Users can upload `.fcs` files directly through an intuitive web interface.
- **AI-Based Gating Analysis**: Automatically analyzes data using clustering algorithms to identify gated populations.
- **Interactive Visualizations**: Provides detailed visualizations using Plotly, which helps users interpret the results efficiently.
- **Dockerized Deployment**: The backend (Django) and frontend (React) are both containerized, making it easy to deploy.

## Prerequisites
- **Docker** and **Docker Compose** for containerized deployment.
- **Python 3.9** and **Node.js 14** or higher for local development.

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/flowcytometry-analysis-tool.git
   cd flowcytometry-analysis-tool
   ```

2. **Run the Setup Script**
   ```bash
   ./setup.sh
   ```

3. **Build and Run Containers**
   - Build the Docker containers:
   ```bash
   docker-compose build
   ```
   - Start the containers:
   ```bash
   docker-compose up
   ```

## Usage
- **Frontend**: Accessible at `http://localhost:3000`.
- **Backend API**: Accessible at `http://localhost:8000`.

1. Open the frontend interface.
2. Upload an `.fcs` file through the form.
3. Wait for the analysis to complete and view the generated visualization.
