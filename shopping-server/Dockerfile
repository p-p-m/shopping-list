FROM python:3.7.3-alpine AS base
RUN mkdir /project
WORKDIR /project
RUN apk update && \
    apk add --virtual build-deps gcc python3-dev musl-dev && \
    apk add postgresql-dev && pip install pipenv

COPY Pipfile* ./
COPY . /project/

FROM base AS prod
RUN set -ex && pipenv install --deploy --system

FROM prod AS dev
RUN pipenv install --dev --deploy --system
