<h1 align="left">
  <img align="right" src="./static/me.gif" width="100" />
  <b>Marvin Heilemann</b>
</h1>

A beautiful Portfolio page made by me for me based on the awesome static site generator
[Gatsby](https://www.gatsbyjs.org/).

- [Development](#development)
- [Building](#building)
  - [NGINX](#nginx)
  - [Now by Zeit](#now-by-zeit)
- [Testing](#testing)
- [Linting](#linting)
- [Deployment](#deployment)
- [Release](#release)
- [Package Manager](#package-manager)

## Development

Developing this project is easy, simply run this in your shell:

```
npm start
```

This will create a
[Gatsby development server](https://www.gatsbyjs.org/docs/gatsby-cli/#develop) with
[hot module replacement (HMR)](https://webpack.js.org/concepts/hot-module-replacement/)
at: `http://localhost:8000`

## Building

Depending on what should be builded, there a different processes.

### NGINX

A production like build [NGINX docker container](https://hub.docker.com/_/nginx). This
will be used for testing/auditing the website.

> Docker must be installed: [install docker desktop](https://docs.docker.com/install/)

```
npm run build
make up
```

The website is now accessible on: `https://marvin.lcl`

> You must set `.lcl` to your hosts file to point to `127.0.0.1`. Read more about it here:
> https://passingcuriosity.com/2013/dnsmasq-dev-osx/

### Now by Zeit

[Now by Zeit](https://zeit.co/home) provides its own
[production like server](https://zeit.co/docs/now-cli#commands/dev) to test things locally
before pushing it in the cloud.

```
npm run serve
```

The website is now accessible on: `http://localhost:59235`

## Testing

To test the sites performance and do some audits I use [Axe](https://www.deque.com/axe/)
and [Lighthouse](https://github.com/GoogleChrome/lighthouse/). Axe is more specific than
Lighthouse but Lighthouse provides a good overview.

[TODO] update testing section

```
npm run audit
```

## Linting

For linting I use the below packages. There are also official VS Code plugins for those.
To run the linter, run this:

```
npm run lint
```

- [Stylelint](https://stylelint.io/)
- [ESLint](https://eslint.org/)
- [Commitlint](https://commitlint.js.org/)
- [Prettier](https://prettier.io/) (as the formatter)

## Deployment

I'm using [Now by Zeit](https://zeit.co/home) to deploy my site.

Pushing to the development branch will automatically create a new build. So it's easy to
view the changes in the production environment before pushing it to the master branch.

Pushing/Merging to the master branch will create or alias a build to the main domain.

## Release

To release a new version type:

```
npm run release
```

Make sure to commit your changes first and write a good commit message as described here:
https://www.conventionalcommits.org/

```yml
<type>: <description>

[optional body]

[optional footer]
```

Types:

- `feat`: One new feature
- `fix`: One bug fix
- `chore`: For updated or added dependencies or a new release
- `docs`: Update README or other informational stuf
- `style`: Code style changes (white-space, formatting, missing semi-colons, etc)

Scopes:

I don't need scopes.

Example commit message with a breaking change (major version increase):

```yml
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

## Package Manager

I really like npm and used it a long time but thought I should try out Yarn or
[pnpm](https://pnpm.js.org/) now. So for this project I will use
[pnpm](https://pnpm.js.org/) which seems the most promissing and because I don't really
understand what is going on with Yarn 2. Maybe I'll try it in another project someday.

To use pnpm with this project, think about all npm command but just call `pnpm` and not
`npm` :).

> Copyright © Marvin Heilemann
