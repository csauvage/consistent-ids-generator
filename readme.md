# hash-generator

> A no dependency randomly consistent (a-la-Stripe) hash generator 

[![npm](https://img.shields.io/npm/v/consistent-ids.svg?style=flat-square)](https://www.npmjs.com/package/hash-generator)
[![npm](https://img.shields.io/npm/dt/consistent-ids.svg?style=flat-square)](https://npm-stat.com/charts.html?package=hash-generator&from=2016-04-01)
[![Travis branch](https://img.shields.io/travis/csauvage/consistent-ids-generator/master.svg?style=flat-square)](https://travis-ci.org/csauvage/hash-generator)
[![Codecov branch](https://img.shields.io/codecov/c/github/csauvage/consistent-ids-generator/master.svg?style=flat-square)](https://codecov.io/github/csauvage/hash-generator)
<br />
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Code of Conduct](https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square)](./other/code_of_conduct.md)
[![Roadmap](https://img.shields.io/badge/%F0%9F%93%94-roadmap-CD9523.svg?style=flat-square)](./other/roadmap.md)

## Why?

// TODO

## Installation

```sh 
npm install consistent-ids --save 
```
Or use yarn (I ❤️ yarn)

```sh 
yarn add consistent-ids
```

## Usage


```dotenv

#In Your .env file
HASH_KEY = SomeTrulyRandomKeyWhichCannotBeGuessedByAnyone

```

```js
import IdGenerator from 'consistent-ids';

const generator = new IdGenerator(); // We'll take care of HASH_KEY for you
generator.generate('ord');

// => ord_1BVVs21TuBY1vZhGhN03ug5
      
generator.generate('cus');

// => cus_1BVVs21TuBY1vZhGhN0sKqd

```




## FAQ

What for ? 
*To be written*


## Contributors

### Maintainer

<img src="http://cdn.clementsauvage.me/profile/2019/round_black.jpg" width="100px;"/><br /><sub>Clément SAUVAGE</sub>

### Contributors

## License

MIT &copy; [Clément SAUVAGE](https://clementsauvage.me)
