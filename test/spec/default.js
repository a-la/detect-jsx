import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import detectJsx from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof detectJsx, 'function')
  },
  async 'calls package without error'() {
    await detectJsx()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await detectJsx({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

// export default T