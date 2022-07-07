import Support from '../supportMethods.js'
import Fields from './Fields.js'

class Errors {
  constructor() {
    this.support = new Support()
    this.fields = new Fields()
  }
  throwError(num) {
    const arrayErrors = [
      'Syntax Error! Available commands: var, let, fn, print, printvars, printfns.',
      'The variable has already been assigned',
      'Variable(s) are not declared',
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
