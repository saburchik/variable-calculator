import Fields from './Fields.js'
import Commands from './Commands.js'
import Errors from './Errors.js'

const setFields = new Fields()
const commands = new Commands()
const error = new Errors()

setFields.getButton().onclick = () => {
  let checkCommands = /\bvar|let|fn|print|printvars|printfns\b/
  const inputFn =
    /^(fn)\s+(?<fnName>[a-zA-Z_$][a-zA-Z\d_$]*)=(?<valueOne>[a-zA-Z_$][a-zA-Z\d_$]*)(?<arithSign>[*/+-])?(?<valueTwo>[a-zA-Z_$][a-zA-Z\d_$]*)?$/
  const inputVar = /^(var)\s+(?<varName>[a-zA-Z_$][a-zA-Z\d_$]*)$/
  const inputLet =
    /^(let)\s+(?<letName>[a-zA-Z_$][a-zA-Z\d_$]*)=(?<letValue>\d+.\d+|\d+|[a-zA-Z_$][a-zA-Z\d_$]*)$/
  const inputPrint = /^(print)\s+(?<keyName>[a-zA-Z_$][a-zA-Z\d_$]*)$/
  const inputPrintvars = /^printvars$/

  error.checkingForEmptyString()
  error.checkingForVariable(checkCommands)

  // == If VAR:
  if (setFields.getInput().value.match(inputVar)) {
    commands.startVar(setFields.getInput().value.match(inputVar))
  }
  // == If LET:
  if (setFields.getInput().value.match(inputLet)) {
    commands.startLet(setFields.getInput().value.match(inputLet))
  }
  // == If PRINT:
  if (setFields.getInput().value.match(inputPrint)) {
    commands.getPrint(setFields.getInput().value.match(inputPrint))
  }
  // == If PRINTVARS:
  if (setFields.getInput().value.match(inputPrintvars)) {
    commands.getPrintvars(setFields.getInput().value.match(inputPrintvars))
  }
  // == If Fn:
  if (setFields.getInput().value.match(inputFn)) {
    commands.getFn(setFields.getInput().value.match(inputFn))
  }
  // if (setFields.getInput().value.match(checkPrint)) {
  //   let namePrint = setFields.getInput().value.match(checkPrint)
  //   let nameFunc = setFields.getTextarea1().value.match(checkFn)
  //   if (nameFunc.groups.nameKey === namePrint.groups.nameKey) {
  //     commands.getPrint(nameFunc)
  //   }
  // }

  // console.log(setFields.getTextarea1().value)
}
