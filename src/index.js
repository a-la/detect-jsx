import { Script } from 'vm'
import { findPosition } from './lib'

/**
 * Returns the index of the opening `<` symbol in a JSX tag by calling a Script constructor and extracting information from the error message.
 * @param {string} input The string to evaluate in the V8 VM as JavaScript with JSX. If there is no `<`, the `null` is returned. Any another error in code will be thrown as is.
 */
const detectJSX = (input) => {
  try {
    new Script(input)
  } catch (err) {
    const { message, stack } = err
    if ('Unexpected token <' != message) throw err
    const bl = findPosition(stack, input)
    return bl
  }
  return null
}

export default detectJSX

/* documentary types/index.xml */
/**
 * @typedef {Object} Config Options for the program.
 * @prop {boolean} [shouldRun=true] A boolean option. Default `true`.
 * @prop {string} text A text to return.
 */
