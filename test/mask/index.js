import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import { findPosition } from '../../src/lib'
import { findIndexByEvaluating } from '../../src'

export
const FindLength = makeTestSuite('test/result/find-position.md', {
  /**
   * @param {string} input
   * @param {Context} context
   */
  getResults(input, { getStack }) {
    const stack = getStack(input)
    const res = findPosition(stack, input)
    return res
  },
  context: Context,
  jsonProps: ['expected'],
})

export
const FindIndex = makeTestSuite('test/result/find-index.md', {
  getResults(input) {
    const res = findIndexByEvaluating(input)
    return res
  },
  jsonProps: ['expected'],
})