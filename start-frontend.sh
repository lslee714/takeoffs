#!/usr/bin/env bash
cd frontend

npm run build

cd ..

docker build -f frontend/Dockerfile -t takeoffs-frontend:latest .
docker run -d -p 80:80 takeoffs-frontend:latest

echo "Frontend production build running on localhost!"