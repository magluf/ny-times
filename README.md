# ny-times

App to view Ny Times' top stories.
Done without CSS frameworks for responsive layout studying.

## Docker Scripts

Build development environment Docker image:

```
$ npm run build-dev-image
```

Build production environment Docker image:

```
$ npm run build-prod-image
```

Build both Docker images:

```
$ npm run build-docker-images
```

Run the development environment:

```
$ docker run -d -v ${PWD}:/app -v /app/node_modules -p 4201:4200 --rm ny-times:dev
```

Run the production environment:

```
$ docker run -d -p 80:80 --rm ny-times:prod
```
