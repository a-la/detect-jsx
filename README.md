# @a-la/detect-jsx

[![npm version](https://badge.fury.io/js/%40a-la%2Fdetect-jsx.svg)](https://www.npmjs.com/package/@a-la/detect-jsx)

`@a-la/detect-jsx` Detects Position Of JSX Tag In JavaScript File.

```sh
yarn add -E @a-la/detect-jsx
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`detectJsx(string: string): number`](#detectjsxstring-string-number)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/0.svg?sanitize=true">
</a></p>

## API

The package is available by importing its default function:

```js
import detectJsx from '@a-la/detect-jsx'
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/1.svg?sanitize=true">
</a></p>

## <code><ins>detectJsx</ins>(</code><sub><br/>&nbsp;&nbsp;`string: string,`<br/></sub><code>): <i>number</i></code>

Returns the position of the first JSX tag by evaluating the code using Node's `vm` package: since JSX reference will throw an error, this error can be caught and used to find out the index of the opening `<` symbol in JSX.

For example, given the following JSX component:
```jsx
const Component = ({ example }) => (
  <div class="Test" id={example}></div>
)
```

It is possible to detect where `JSX` starts:

```js
/* yarn example/ */
import read from '@wrote/read'
import detectJSX from '@a-la/detect-jsx'

(async () => {
  const code = await read('example/Component.jsx')
  const res = detectJSX(code)
  console.log(res)
})()
```
```
39
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/2.svg?sanitize=true">
</a></p>

## Copyright

(c) [À La Mode][1] 2019

[1]: https://alamode.cc

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/-1.svg?sanitize=true">
</a></p>