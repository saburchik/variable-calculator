import Fields from './Fields.js'
import Commands from './Commands.js'
import Errors from './Errors.js'

const setFields = new Fields()
const commands = new Commands()
const error = new Errors()

setFields.getButton().onclick = () => {
  let checkCommands = /\bvar|let|fn|print|printvars|printfns\b/
  let checkVar = /var\s(?<varKey>[a-zA-Z0-9]+)/m
  let checkLet = /let\s(?<letKey>[a-zA-Z0-9]+)=(?<letValue>\d+.\d+|\d+)/
  let checkFn = /fn\s([a-zA-Z0-9]+)\s([a-zA-Z0-9]+)([\+\-\*\/])([a-zA-Z0-9]+)/

  error.checkingForEmptyString()
  error.checkingForVariable(checkCommands)

  if (setFields.getInput().value.match(checkVar)) {
    commands.getVar()
  }
  if (setFields.getInput().value.match(checkLet)) {
    commands.getLet()
  }
  if (setFields.getInput().value.match(checkFn)) {
    commands.getFn(setFields.getInput().value.match(checkFn))
  }
}
