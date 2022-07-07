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
} from './regExp.js'

const fields = new Fields()
const core = new Core()
const error = new Errors()

fields.getInput().addEventListener('change', () => {
  let spaceRemove = fields.getInput().value.replace(/^ +| +$|( ) +/g, '$1')
  return (fields.getInput().value = spaceRemove)
})

fields.getButton().onclick = () => {
  if (fields.regInput(regCommands) === null) {
    throw Error(error.throwError(0))
  } else {
    // == If VAR:
    if (fields.regInput(regVar)) {
      core.var(fields.regInput(regVar))
    }
    // == If LET:
    if (fields.regInput(regLet)) {
      core.let(fields.regInput(regLet))
    }
    // == If PRINT:
    if (fields.regInput(regPrint)) {
      core.print(fields.regInput(regPrint))
    }
    // == If PRINTVARS:
    if (fields.regInput(regPrintvars)) {
      core.printvars(fields.regInput(regPrintvars))
    }
    // == If FN:
    if (fields.regInput(regFn)) {
      core.fn(fields.regInput(regFn))
    }
    // == If PRINTFNS:
    if (fields.regInput(regPrintfns)) {
      core.printfns(fields.regInput(regPrintfns))
    }
  }
}
