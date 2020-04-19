#!/usr/bin/env bash

./start-frontend.sh
if [ $? -eq 0 ] 
then
    ./start-backend.sh
else
    echo "The script failed " >&2
    exit 1
fi
