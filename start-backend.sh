#!/usr/bin/env bash

docker build -f backend/dev.Dockerfile -t takeoffs-backend:latest .
if [ $? -eq 0 ] 
then
    echo "Takeoffs backend image built!"

else
    echo "Failed to build backend image" >&2
    exit 1
fi


docker run -p 8000:8080 -d takeoffs-backend:latest
if [ $? -eq 0 ] 
then
    echo "Takeoffs backend running on localhost:8000!"

else
    echo "Failed to start Takeoffs backend container" >&2
    exit 1
fi