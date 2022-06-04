class Fields {
  getForm() {
    const form = document.querySelector('form')
    return form
  }
  getInput() {
    const input = document.querySelector('input')
    return input.value
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
    const textarea2 = document.querySelector('#textarea1')
    return textarea2
  }

  throwError(num) {
    const arrayErrors = [
      'Syntax Error! Available commands: var, let, fn, print, printvars, printfns.',
      'Error! Available you have an empty string',
    ]
    return (document.querySelector('h1').innerHTML = arrayErrors[num])
  }
}

export default Fields
