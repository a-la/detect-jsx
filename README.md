# @a-la/detect-jsx

[![npm version](https://badge.fury.io/js/@a-la/detect-jsx.svg)](https://npmjs.org/package/@a-la/detect-jsx)

`@a-la/detect-jsx` is Detects Position Of JSX Tag In JavaScript File.

```sh
yarn add -E @a-la/detect-jsx
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`detectJsx(arg1: string, arg2?: boolean)`](#mynewpackagearg1-stringarg2-boolean-void)
  * [`Config`](#type-config)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import detectJsx from '@a-la/detect-jsx'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `detectJsx(`<br/>&nbsp;&nbsp;`arg1: string,`<br/>&nbsp;&nbsp;`arg2?: boolean,`<br/>`): void`

Call this function to get the result you want.

__<a name="type-config">`Config`</a>__: Options for the program.

|   Name    |   Type    |    Description    | Default |
| --------- | --------- | ----------------- | ------- |
| shouldRun | _boolean_ | A boolean option. | `true`  |
| __text*__ | _string_  | A text to return. | -       |

```js
/* yarn example/ */
import detectJsx from '@a-la/detect-jsx'

(async () => {
  const res = await detectJsx({
    text: 'example',
  })
  console.log(res)
})()
```
```
example
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

(c) [À La Mode][1] 2019

[1]: https://alamode.cc

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>