import Fields from './Fields.js'

class Errors extends Fields {
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
    super.addInInput(input)
    super.getInput().value = ''
    super.getTextareaOutput().innerHTML += NaN + '\n'
    throw Error(this.throwError(3))
  }
}

export default Errors
