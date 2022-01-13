# Desafio Técnico - Node.js - FRAMEWORK

<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>

</p>

## Description

[Desafio Técnico - Node.js](https://github.com/LuizPiresS/framework-dividers)

REST API para calculo dos dividendos de um dado número e se os mesmos são números primos

## Technologies used

**Framework:**

- [Express](https://expressjs.com/pt-br/)
- [Overnightjs](https://github.com/seanpmaxwell/overnight/tree/master)

**Software quality**

- [Husky](https://github.com/typicode/husky)
- [git-commit-msg-linter](https://github.com/legend80s/commit-msg-linter)
- [lint-staged](https://github.com/okonet/lint-staged)

## Running the app

```bash
docker-compose up
request:
POST /dividers HTTP/1.1
Content-Type: application/json
Host: localhost:3000
Content-Length: 21

{
	"entrada": "333"
}

```

## Test

```bash

# run tests
$ npm run test


```

## License

[MIT licensed](LICENSE).
