/**
 * The function to extract the position of the symbol from the error due to the fact that the script body couldn't be evaluated by the _vm.Script_ constructor.
 * @param {string} stack The error stack.
 * @param {string} input The input which was passed to the evaluation.
 */
       const findPosition = (stack, input) => {
  const [h, , l2] = stack.split('\n')
  const l = parseInt(h.replace(/.+?(\d+)$/, (m, d) => d)) - 1
  const c = l2.indexOf('^')
  const { length } = input.split('\n').slice(0, l).join('\n')
  const lb = length + c + (l ? 1 : 0)
  return lb
}

module.exports.findPosition = findPosition