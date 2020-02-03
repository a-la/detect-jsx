import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import { findPosition } from '../../src/lib'
import detectJSX from '../../src'

export
const FindLength = makeTestSuite('test/result/find-position.md', {
  /**
   * @param {string} input
   * @param {Context} context
   */
  getResults({ getStack }) {
    const stack = getStack(this.input)
    const res = findPosition(stack, this.input)
    return res
  },
  context: Context,
  jsonProps: ['expected'],
})

export
const FindIndex = makeTestSuite('test/result/find-index.md', {
  getResults() {
    const res = detectJSX(this.input)
    return res
  },
  jsonProps: ['expected'],
})