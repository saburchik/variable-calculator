import Fields from './Fields.js'
import Fn from './Commands/Fn.js'
import Var from './Commands/Var.js'
import Let from './Commands/Let.js'
import Print from './Commands/Print.js'
import Printvars from './Commands/Printvars.js'

const setFields = new Fields()
const setFn = new Fn()
const setVar = new Var()
const setLet = new Let()
const setPrint = new Print()
const setPrintvars = new Printvars()

const inputFn =
  /^(fn)\s+(?<fnName>[a-zA-Z_$][a-zA-Z\d_$]*)=(?<valueOne>[a-zA-Z_$][a-zA-Z\d_$]*)(?<arithSign>[*/+-])?(?<valueTwo>[a-zA-Z_$][a-zA-Z\d_$]*)?$/
const inputVar = /^(var)\s+(?<varName>[a-zA-Z_$][a-zA-Z\d_$]*)$/
const inputLet =
  /^(let)\s+(?<letName>[a-zA-Z_$][a-zA-Z\d_$]*)=(?<letValue>\d+.\d+|\d+|[a-zA-Z_$][a-zA-Z\d_$]*)$/
const inputPrint = /^(print)\s+(?<keyName>[a-zA-Z_$][a-zA-Z\d_$]*)$/
const inputPrintvars = /^printvars$/

setFields.getButton().onclick = () => {
  // == If VAR:
  if (setFields.regInput(inputVar)) {
    setVar.getVar(setFields.regInput(inputVar))
  }
  // == If LET:
  if (setFields.regInput(inputLet)) {
    setLet.getLet(setFields.regInput(inputLet))
  }
  // == If PRINT:
  if (setFields.regInput(inputPrint)) {
    setPrint.getPrint(setFields.regInput(inputPrint))
  }
  // == If PRINTVARS:
  if (setFields.regInput(inputPrintvars)) {
    setPrintvars.getPrintvars(setFields.regInput(inputPrintvars))
  }
  // == If FN:
  if (setFields.regInput(inputFn)) {
    setFn.getFn(setFields.regInput(inputFn))
  }
}
