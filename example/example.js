/* yarn example/ */
import detectJsx from '../src'

(async () => {
  const res = await detectJsx({
    text: 'example',
  })
  console.log(res)
})()