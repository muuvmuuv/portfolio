<h1 align="left">
  <img align="right" src="./static/me.gif" width="100">
  <b>Marvin Heilemann</b>
</h1>

- [Start](#start)
- [Deploy](#deploy)
- [Docker](#docker)
  - [Interactive shell session](#interactive-shell-session)
    - [Image](#image)
    - [Container](#container)
    - [Logs](#logs)
    - [Performance (top)](#performance-top)
- [Issues](#issues)

## Start

Have a look at `Makefile` for testing the live environment or at `package.json`
for development.

## Deploy

Since I use [now](https://zeit.co/muuvmuuv/portfolio) for my website, it is
deployed there and fully automated.

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

## Issues

Issues are referenced with `// BUG: #<NUMBER>` and can be seen in
[ISSUES.md](./ISSUES.md).

> Copyright (c) Marvin Heilemann
