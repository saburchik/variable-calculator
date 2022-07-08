import Fields from './classes/Fields.js'
import Core from './classes/Core.js'
import Errors from './classes/Errors.js'
import {
  regFn,
  regLet,
  regPrint,
  regPrintvars,
  regVar,
  regCommands,
  regPrintfns,
  regRemovingSpaces,
} from './regExp.js'

const fields = new Fields()
const core = new Core()
const error = new Errors()

fields.getInput().onchange = () => {
  let removeSpaces = fields.getInput().value.replace(regRemovingSpaces, '$1')
  return (fields.getInput().value = removeSpaces)
}

fields.getButton().onclick = () => {
  if (!fields.valid(regCommands)) error.throwError(0)
  if (fields.valid(regVar)) core.var(fields.valid(regVar))
  if (fields.valid(regLet)) core.let(fields.valid(regLet))
  if (fields.valid(regPrint)) core.print(fields.valid(regPrint))
  if (fields.valid(regPrintvars)) core.printvars(fields.valid(regPrintvars))
  if (fields.valid(regFn)) core.fn(fields.valid(regFn))
  if (fields.valid(regPrintfns)) core.printfns(fields.valid(regPrintfns))
}
