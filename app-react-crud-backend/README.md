# app-react-crud-backend

> 

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/app-react-crud-backend; npm install
    ```

3. Start your app

    ```
    npm start
    ```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g feathers-cli             # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers generate model                 # Generate a new Model
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).

## Changelog

__0.1.0__

- Initial release

## License

Copyright (c) 2016

Licensed under the [MIT license](LICENSE).



# Docker

## Build Backend
docker build -t ravuthz/app-react-crud-backend .
docker run -p 9999:8080 -d ravuthz/app-react-crud-backend

## -Docker run IMAGE=ravuthz/app-react-crud-backend, with PORT=9999, NAME=react_backend
docker run -p 9999:8081 -d --name react_backend ravuthz/app-react-crud-backend

## Build Frontent
docker build -t ravuthz/app-react-crud-frontend .
docker run -p 8080:3000 -d --name react_frontend ravuthz/app-react-crud-frontend

## -Run with bash
docker exec -it react_backend bash
docker exec -it react_frontend bash

```
node -v => v8.9.4
yarn -v => 1.3.2
npm -v  => 5.6.0
```



curl localhost:9999

docker ps

## List all containers
docker ps

## List all container only ID
docker ps -aq

## Stop all running containers
docker stop $(docker ps -aq)

## Remove all stopped containers
docker rm $(docker ps -a -q)

## Remove all images
docker rmi $(docker images -q)

#
docker stop $(docker ps -aq) && docker rm $(docker ps -aq)

docker-compose up -d --build
