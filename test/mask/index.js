import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import detectJsx from '../../src'

const ts = makeTestSuite('test/result', {
  async getResults(input) {
    const res = await detectJsx({
      text: input,
    })
    return res
  },
  context: Context,
})

// export default ts
