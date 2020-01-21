<h1 align="left">
  <img align="right" src="./static/me.gif" width="100">
  <b>Marvin Heilemann</b>
</h1>

- [Start](#start)
- [Deploy](#deploy)
- [Build](#build)
- [Docker](#docker)
  - [Interactive shell session](#interactive-shell-session)
    - [Image](#image)
    - [Container](#container)
    - [Logs](#logs)
    - [Performance (top)](#performance-top)

## Start

Have a look at `Makefile` for testing the live environment or at `package.json`
for development.

## Deploy

I'm using [now](https://zeit.co/muuvmuuv/portfolio) to deploy my site.

```shell
npm run deploy
npm run deploy-prod
```

## Build

```shell
npm run build
```

To test the website locally you can run either `npm run serve` to start a local
dev server by [Zeit Now](https://zeit.co/docs/now-cli#commands/dev) or build the
website and run `make up` to start a local NGINX docker container.

## Docker

### Interactive shell session

#### Image

```shell
docker run -it --entrypoint bash nginx
```

#### Container

```shell
docker exec -i -t marvin-nginx bash
```

#### Logs

```shell
docker logs -f marvin-nginx
```

#### Performance (top)

```shell
docker-compose top nginx
```

> Copyright © Marvin Heilemann
