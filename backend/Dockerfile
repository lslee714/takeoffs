FROM python:3.6-alpine

RUN adduser -D docker
RUN apk update
RUN apk add make automake gcc g++ subversion python3-dev

WORKDIR /home/docker

COPY backend/requirements.txt requirements.txt
RUN python -m venv venv

RUN venv/bin/pip install -r requirements.txt

COPY backend/construction_projects construction_projects
COPY backend/material_selector material_selector
COPY backend/models models
COPY backend/app app
COPY backend/migrations migrations
COPY backend/configs configs
COPY backend/run.py backend/alembic.ini backend/wsgi.py backend/boot.sh ./

RUN chmod +x boot.sh

ENV FLASK_APP run.py
ENV SQLALCHEMY_DATABASE_URI sqlite://///home/docker/test.db
ENV BASE_UPLOAD_PATH /home/docker/temp
ENV MATERIAL_API_URL https://materials-api.takeoffs.io

RUN chown -R docker:docker ./
USER docker

EXPOSE 5000
ENTRYPOINT ["sh", "boot.sh"]