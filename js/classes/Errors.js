import SupportGeneral from '../SupportGeneral.js'
import Fields from './Fields.js'

class Errors {
  constructor() {
    this.support = new SupportGeneral()
    this.fields = new Fields()
  }
  throwError(num) {
    const arrayErrors = [
      'Syntax Error! The input field is empty or there is no such command!',
      'The variable has already been assigned',
      'The variable is not declared',
      'Syntax error!',
    ]
    return (document.querySelector('h2').innerHTML = arrayErrors[num])
  }

  notDeclared(input) {
    this.throwError(3)
    this.support.addInTextareaInput(input)
    this.fields.getInput().value = ''
    this.fields.getTextareaOutput().innerHTML += NaN + '\n'
  }
}

export default Errors
