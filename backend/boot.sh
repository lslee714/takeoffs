#!/bin/bash

source venv/bin/activate
alembic upgrade heads
exec gunicorn -b :5000 --access-logfile - --error-logfile - wsgi:app