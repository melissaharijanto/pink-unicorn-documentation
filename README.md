# Classroom360 Documentation

This project serves to provide documentation for [Classroom360](https://github.com/melissaharijanto/pink-unicorn) submitted as an entry to NUS Computing Club Life Hack 2023.

Check out the deployment of the documentation site here! [https://pink-unicorn-documentation.vercel.app](https://pink-unicorn-documentation.vercel.app)

This project is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.


### Tech Stack

- Docusaurus 2
  - Built on top of JavaScript and Markdown rendering
- Vercel (Deployment)

## Installation

```
$ yarn
```

## Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## `npm` Alternatives

```
npm i
npm docusaurus start
```