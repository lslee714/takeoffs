#!/usr/bin/env bash

docker build -f backend/Dockerfile -t takeoffs-backend:latest .
docker run -p 8000:5000 -d takeoffs-backend:latest

if [ $? -eq 0 ] 
then
echo "Takeoffs backend running on localhost:8000!"

else
echo "Failed to start Takeoffs backend" >&2
fi