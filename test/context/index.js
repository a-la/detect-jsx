import getStack from './get-stack'

/**
 * A testing context for the package.
 */
export default class Context {
  getStack(string) {
    return getStack(string)
  }
}