## API

The package is available by importing its default function:

```js
import detectJsx from '@a-la/detect-jsx'
```

%~%

```## detectJsx => number
[
  ["string", "string"]
]
```

Returns the position of the first JSX tag by evaluating the code using Node's `vm` package: since JSX reference will throw an error, this error can be caught and used to find out the index of the opening `<` symbol in JSX.

For example, given the following JSX component:
%EXAMPLE: example/Component.jsx%

It is possible to detect where `JSX` starts:

%EXAMPLE: example/example.js, ../src => @a-la/detect-jsx%
%FORK example example/example%

%~%