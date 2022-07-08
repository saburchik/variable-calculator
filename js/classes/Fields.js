export default class Fields {
  valid(regExp) {
    return this.getInput().value.match(regExp)
  }
  getForm() {
    return document.getElementById('form')
  }
  getInput() {
    return document.getElementById('input')
  }
  getButton() {
    this.getForm().onclick = (e) => e.preventDefault()
    return document.getElementById('button')
  }
  getTextareaInput() {
    return document.getElementById('textareaInput')
  }
  getTextareaOutput() {
    return document.getElementById('textareaOutput')
  }
}
