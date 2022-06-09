class Fields {
  constructor() {}

  regInput(regValue) {
    return this.getInput().value.match(regValue)
  }

  getForm() {
    const form = document.querySelector('form')
    return form
  }
  getInput() {
    const input = document.querySelector('input')
    return input
  }
  getButton() {
    this.getForm().onclick = (e) => e.preventDefault() // Stop reload
    const button = document.querySelector('button')
    return button
  }
  getTextareaInput() {
    const textarea1 = document.querySelector('#textarea1')
    return textarea1
  }
  getTextareaOutput() {
    const textarea2 = document.querySelector('#textarea2')
    return textarea2
  }

  throwError(num) {
    const arrayErrors = [
      'Error! You have an empty field.',
      'Syntax Error! Available commands: var, let, fn, print, printvars, printfns.',
      'The variable has already been assigned',
      'Variable(s) are not declared',
      '* Значение функции/переменной не определено, т.к. не определены значения ее аргументов',
    ]
    return (document.querySelector('h2').innerHTML = arrayErrors[num])
  }
}

export default Fields
