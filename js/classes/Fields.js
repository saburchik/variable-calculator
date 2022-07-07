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
}

export default Fields
