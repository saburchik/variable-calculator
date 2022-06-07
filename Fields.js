class Fields {
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
  getTextarea1() {
    const textarea1 = document.querySelector('#textarea1')
    return textarea1
  }
  getTextarea2() {
    const textarea2 = document.querySelector('#textarea2')
    return textarea2
  }

  throwError(num) {
    const arrayErrors = [
      'Error! Perhaps you have an empty field.',
      'Syntax Error! Available commands: var, let, fn, print, printvars, printfns.',
      'The variable has already been assigned',
    ]
    return (document.querySelector('h1').innerHTML = arrayErrors[num])
  }
}

export default Fields
