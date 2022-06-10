class Fields {
  regInput(regValue) {
    if (regValue === null) {
      throw Error('oh noo')
    }
    return this.getInput().value.match(regValue)
  }

  getForm() {
    return document.querySelector('form')
  }
  getInput() {
    return document.querySelector('input')
  }
  getButton() {
    this.getForm().onclick = (e) => e.preventDefault()
    return document.querySelector('button')
  }
  getTextareaInput() {
    return document.querySelector('#textareaInput')
  }
  getTextareaOutput() {
    return document.querySelector('#textareaOutput')
  }

  addInInput(field) {
    this.getTextareaInput().innerHTML += field.input + '\n'
    document.querySelector('h2').innerHTML = ''
  }

  fixNumber(num, dec = 2) {
    const calcDec = Math.pow(10, dec)
    return Math.trunc(num * calcDec) / calcDec
  }
}

export default Fields
