# This is the docker file for the GCP App Engine only, use dev.Dockerfile for local configuration
FROM python:3.6-alpine

RUN adduser -D docker
RUN apk update
RUN apk add make automake gcc g++ subversion python3-dev

WORKDIR /home/docker
COPY requirements.txt requirements.txt
RUN python -m venv venv
RUN \
    apk add --no-cache postgresql-libs && \
    apk add --no-cache --virtual .build-deps gcc musl-dev postgresql-dev && \
    venv/bin/pip install -r requirements.txt --no-cache-dir && \
    apk --purge del .build-deps

COPY construction_projects construction_projects
COPY material_selector material_selector
COPY models models
COPY app app
COPY migrations migrations
COPY configs configs
COPY run.py alembic.ini wsgi.py boot.sh ./

RUN chmod +x boot.sh

ENV FLASK_APP run.py
ENV BASE_UPLOAD_PATH /home/docker/temp
ENV MATERIAL_API_URL https://materials-api.takeoffs.io

RUN chown -R docker:docker ./
USER docker

EXPOSE 8080
ENTRYPOINT ["sh", "boot.sh"]