import Fields from './Fields.js'

class Errors extends Fields {
  checkingForEmptyString() {
    if (this.getInput().value === '') {
      throw Error(this.throwError(0))
    }
  }

  checkingForVariable(checkCommands) {
    if (this.getInput().value.match(checkCommands)) {
      this.getTextarea1().innerHTML += this.getInput().value + '\n'
      document.querySelector('h1').innerHTML = ''
      //console.log(inputValue)
    } else {
      this.getTextarea2().innerHTML = 'Syntax error!' + '\n'
      throw Error(this.throwError(1))
    }
  }
}

export default Errors
