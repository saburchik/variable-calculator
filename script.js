import Fields from './Fields.js'
import Commands from './Commands.js'
import Errors from './Errors.js'

const setFields = new Fields()
const commands = new Commands()
const error = new Errors()

setFields.getButton().onclick = () => {
  let checkCommands = /\bvar|let|fn|print|printvars|printfns\b/
  let checkPrint = /\bprintvars\b/
  let checkLet =
    /(let|var)\s(?<letKey>[a-zA-Z0-9]+)?=?(?<letValue>\d+.\d+|\d+)?/
  let checkFn =
    /fn\s(?<nameKey>[a-zA-Z0-9]+)\s([a-zA-Z0-9]+)([*/+-])([a-zA-Z0-9]+)/

  error.checkingForEmptyString()
  error.checkingForVariable(checkCommands)

  if (setFields.getInput().value.match(checkLet)) {
    commands.getVarAndLet()
  }
  if (setFields.getInput().value.match(checkPrint)) {
    commands.getPrintvars()
  }

  if (setFields.getInput().value.match(checkFn)) {
    commands.getFn(setFields.getInput().value.match(checkFn))
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
