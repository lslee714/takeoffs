FROM python:3.6-alpine

RUN adduser -D docker
RUN apk update
RUN apk add make automake gcc g++ subversion python3-dev

COPY backend/requirements.txt requirements.txt
RUN python -m venv venv
RUN \
    apk add --no-cache postgresql-libs && \
    apk add --no-cache --virtual .build-deps gcc musl-dev postgresql-dev && \
    venv/bin/pip install -r requirements.txt --no-cache-dir && \
    apk --purge del .build-deps

WORKDIR /home/docker

COPY backend/construction_projects construction_projects
COPY backend/material_selector material_selector
COPY backend/models models
COPY backend/app app
COPY backend/migrations migrations
COPY backend/configs configs
COPY backend/run.py backend/alembic.ini backend/wsgi.py backend/boot.sh ./

RUN chmod +x boot.sh

ENV FLASK_APP run.py
ENV BASE_UPLOAD_PATH /home/docker/temp
ENV MATERIAL_API_URL https://materials-api.takeoffs.io
ENV PRODUCTION false
# This Dockerfile assumes sqlite database by default, please override SQLALCHEMY_DATABASE_URI with your postgres URI
# If you wish to use sqlite, please comment out the __table_args__ class variables in the Sqlalchemy models
ENV SQLALCHEMY_DATABASE_URI sqlite://///home/docker/test.db

RUN chown -R docker:docker ./
USER docker

EXPOSE 8080
ENTRYPOINT ["sh", "boot.sh"]