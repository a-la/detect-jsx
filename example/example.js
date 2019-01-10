/* yarn example/ */
import read from '@wrote/read'
import detectJSX from '../src'

(async () => {
  const code = await read('example/Component.jsx')
  const res = detectJSX(code)
  console.log(res)
})()