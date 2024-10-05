#!/bin/bash

# Install system-level dependencies
sudo apt-get update
sudo apt-get install -y python3-pip docker.io docker-compose containerd

# Check if Docker and Node.js installed correctly
if ! command -v docker &> /dev/null || ! command -v npm &> /dev/null
then
    echo "Docker or Node.js could not be installed. Please install them manually."
    exit 1
fi

# Ensure /usr/bin is in PATH for docker-compose
if [[ ":$PATH:" != *":/usr/bin:"* ]]; then
    export PATH="$PATH:/usr/bin"
    echo 'export PATH="$PATH:/usr/bin"' >> ~/.bashrc
fi

# Install Python dependencies
if [ -f "requirements.txt" ]; then
    pip install -r requirements.txt
else
    echo "requirements.txt not found!"
    exit 1
fi

# Set up frontend project
if [ -f "flowcytometry-frontend/package.json" ]; then
    cd flowcytometry-frontend
    npm install
    cd ..
else
    echo "Frontend folder or package.json not found!"
    exit 1
fi
