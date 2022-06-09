import Fields from './Fields.js'

class Errors extends Fields {
  checkingForEmptyString() {
    if (this.getInput().value === '') {
      throw Error(this.throwError(0))
    }
  }

  checkingForVariable(checkCommands) {
    if (!this.getInput().value.match(checkCommands)) {
      this.getTextareaOutput().innerHTML = 'Syntax error!' + '\n'
      throw Error(this.throwError(1))
    }
  }
}

export default Errors
