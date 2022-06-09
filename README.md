# Mable

Mable Frontend Engineer Assessment

## Installation

    npm install

## Running application

This project is based on Angular framework, so it needs to be build before it can be run.

    npm run start

Additionally, you can build a docker container that will run the application.

    docker build . -t directory-structure:latest

## Accessing application

If the application is run directly from the source directory it can be accessed though the following URL: http://localhost:4200

The docker container is built with nginx configuration exposing default http port 80/tcp.

## Tests

As per original requirements this project contains no unit tests. 

## To be added in future versions:
  - Implement servies to communicate with the backend
  - Implement routing
  - Protect application with the login screen (authguards)
  - Implement edit in place for tree element with the help of structural directives
  - Improve accessibility further