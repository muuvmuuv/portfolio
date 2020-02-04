<h1 align="left">
  <img align="right" src="./static/me.gif" width="100">
  <b>Marvin Heilemann</b>
</h1>

A beautiful Portfolio page made by me for me based on the awesome static site generator
[Gatsby](https://www.gatsbyjs.org/).

- [Development](#development)
- [Building](#building)
  - [NGINX](#nginx)
  - [Now by Zeit](#now-by-zeit)
- [Auditing](#auditing)
- [Linting](#linting)
- [Deployment](#deployment)
- [Release](#release)
- [Docker commands](#docker-commands)
  - [Logs](#logs)
  - [Performance](#performance)
  - [Interactive shell session](#interactive-shell-session)
    - [Image](#image)
    - [Container](#container)

## Development

Developing this project is easy, simply run this in your shell:

```shell
npm start
```

This will create a
[Gatsby development server](https://www.gatsbyjs.org/docs/gatsby-cli/#develop) with
[hot module replacement (HMR)](https://webpack.js.org/concepts/hot-module-replacement/)
at: `http://localhost:8000`

## Building

Depending on what you want to build, there a different processes.

### NGINX

A production like build [NGINX docker container](https://hub.docker.com/_/nginx). This
will also be used for auditing the website so make sure you have
[docker installed](https://docs.docker.com/install/) on your computer.

```shell
npm run build
make up
```

The website is now accessible on: `https://marvin.lcl`

> You must set `.lcl` to your hosts file to point to `127.0.0.1`

### Now by Zeit

[Now by Zeit](https://zeit.co/home) provides its own
[production like server](https://zeit.co/docs/now-cli#commands/dev) to test things locally
before pushing it in the cloud.

```shell
npm run serve
```

The website is now accessible on: `http://localhost:59235`

## Auditing

To audit our site and see if it matches accessibility, SEO and performance requirements,
we use [Axe](https://www.deque.com/axe/) and
[Lighthouse](https://github.com/GoogleChrome/lighthouse/). Axe is more specific than
Lighthouse but Lighthouse provides a good overview.

```shell
npm run audit
```

## Linting

For linting I use [Stylelint](https://stylelint.io/), [ESLint](https://eslint.org/) and
[Prettier](https://prettier.io/) (as the formatter). There are also official VS Code
plugins for those, please install them before contributing. To run the linter, run this:

```shell
npm run lint
```

## Deployment

I'm using [Now by Zeit](https://zeit.co/home) to deploy my site.

Pushing to the development branch will automatically create a new sub-domain and a build.
So it's easy to view the changes in the production environment before pushing it to
master.

Pushing to master will create a build and directly upload it to the main domain. Please be
sure to create one on the development branch first and test/lint the code.

## Release

To release a new version type:

```shell
npm run release
```

Make sure to commit your changes first and write a good commit message as described here:
https://www.conventionalcommits.org/

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Example tags:

- `fix` - for a bug fix
- `update` - either for a backwards-compatible enhancement or for a simple change
- `new` - implemented a new feature
- `upgrade` - for a dependency upgrade
- `chore` - for refactoring, adding tests, etc. (anything that isn't user-facing)

Example commit message with a breaking change (major version increase):

```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

## Docker commands

### Logs

```shell
docker logs -f marvin-nginx
```

### Performance

```shell
docker-compose top nginx
```

### Interactive shell session

#### Image

```shell
docker run -it --entrypoint bash nginx
```

#### Container

```shell
docker exec -i -t marvin-nginx bash
```

> Copyright © Marvin Heilemann
