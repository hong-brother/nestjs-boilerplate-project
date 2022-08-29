<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## structure
```bash
├── docker
│   └── App.Dockerfile
├── src
│   ├── constants
│   │   └── common.constants.ts
│   ├── decorators
│   │   ├── auth-bearer.decorator.ts
│   │   ├── auth.decorator.ts
│   │   ├── roles.decorator.ts
│   │   └── serialization.decorator.ts
│   ├── exceptions
│   │   └── validation.exceptions.ts
│   ├── filters
│   │   ├── all-exceptions.filter.ts
│   │   ├── bad-request-exception.filter.ts
│   │   ├── forbidden-exception.filter.ts
│   │   ├── index.ts
│   │   ├── not-found-exception.filter.ts
│   │   ├── unauthorized-exception.filter.ts
│   │   ├── validation-exceptions.filter.ts
│   │   └── ws-exceptions.filter.ts
│   ├── guards
│   │   ├── jwt-access.guard.ts
│   │   ├── jwt-refresh.guard.ts
│   │   ├── jwt-ws-access.guard.ts
│   │   └── roles.guard.ts
│   ├── interceptors
│   │   ├── serialization.interceptor.ts
│   │   └── wrap-response.interceptor.ts
│   ├── interfaces
│   │   ├── exception-response.interface.ts
│   │   ├── jwt-decode-response.interface.ts
│   │   ├── paginatedEntity.interface.ts
│   │   └── pagination-params.interface.ts
│   ├── main.ts
│   ├── modules
│   │   ├── app
│   │   │   ├── app.controller.ts
│   │   │   ├── app.gateway.ts
│   │   │   ├── app.module.ts
│   │   │   └── app.service.ts
│   │   └── v1
│   │       ├── auth
│   │       │   ├── auth-constants.ts
│   │       │   ├── auth.controller.spec.ts
│   │       │   ├── auth.controller.ts
│   │       │   ├── auth.module.ts
│   │       │   ├── auth.repository.ts
│   │       │   ├── auth.service.spec.ts
│   │       │   ├── auth.service.ts
│   │       │   ├── dto
│   │       │   │   ├── jwt-tokens.dto.ts
│   │       │   │   ├── refresh-token.dto.ts
│   │       │   │   ├── sign-in.dto.ts
│   │       │   │   ├── sign-up.dto.ts
│   │       │   │   └── verify-user.dto.ts
│   │       │   ├── guards
│   │       │   │   └── local-auth.guard.ts
│   │       │   ├── interfaces
│   │       │   │   ├── decoded-user.interface.ts
│   │       │   │   ├── jwt-strategy-validate.interface.ts
│   │       │   │   ├── login-payload.interface.ts
│   │       │   │   └── validate-user-output.interface.ts
│   │       │   └── strategies
│   │       │       ├── jwt-access.strategy.ts
│   │       │       ├── jwt-refresh.strategy.ts
│   │       │       ├── jwt-ws-access.strategy.ts
│   │       │       └── local.strategy.ts
│   │       ├── users
│   │       │   ├── dto
│   │       │   │   ├── update-user.dto.ts
│   │       │   │   └── user-response.dto.ts
│   │       │   ├── interfaces
│   │       │   │   └── user.interface.ts
│   │       │   ├── schemas
│   │       │   │   └── users.schema.ts
│   │       │   ├── users-constants.ts
│   │       │   ├── users.controller.spec.ts
│   │       │   ├── users.controller.ts
│   │       │   ├── users.module.ts
│   │       │   ├── users.repository.ts
│   │       │   ├── users.service.spec.ts
│   │       │   └── users.service.ts
│   │       └── v1.module.ts
│   ├── pipes
│   │   └── parse-object-id.pipe.ts
│   └── templates
│       └── verify-password.hbs
├── tsconfig.build.json
├── tsconfig.json
├── typedoc.json
├── index.js
├── nest-cli.json
├── package-lock.json
├── package.json
├── docker-compose.yml
└──README.md

```