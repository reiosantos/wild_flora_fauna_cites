# base image
FROM python:3.7.2-alpine3.7

ENV PYTHONUNBUFFERED 1

# set working dir
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# add and install requirements
RUN pip install pipenv
COPY Pipfile /usr/src/app/
RUN pipenv lock --requirements > requirements.txt
RUN pip install -r requirements.txt

# add app
COPY . /usr/src/app
