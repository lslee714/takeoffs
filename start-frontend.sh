#!/usr/bin/env bash
cd frontend

npm run build

cd ..

docker build -f frontend/Dockerfile -t takeoffs-frontend:latest .
docker run -d -p 80:80 takeoffs-frontend:latest

if [ $? -eq 0 ] 
then
echo "Frontend production build running on localhost!"
else
echo "Failed to start Takeoffs frontend" >&2
fi