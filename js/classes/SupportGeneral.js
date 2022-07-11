import Fields from './Fields.js'

export default class SupportGeneral {
  constructor() {
    this.marks = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b,
    }
    this.fields = new Fields()
  }

  calculation(op, a, b) {
    if (op in this.marks) return this.marks[op](a, b)
    return Error(`Unsupported operator: ${op}`)
  }
  sortNames(objWithData) {
    const orderedNames = Object.keys(objWithData)
      .sort()
      .reduce((obj, key) => {
        obj[key] = objWithData[key]
        return obj
      }, {})
    return orderedNames
  }
  fixNumber(num, dec = 2) {
    const calcDec = Math.pow(10, dec)
    return Math.trunc(num * calcDec) / calcDec
  }
  addInTextareaInput(field) {
    this.fields.getTextareaInput().innerHTML += field.input + '\n'
    document.querySelector('h2').innerHTML = ''
    this.fields.getInput().value = ''
  }
  addInTextareaOutput(name, value) {
    if (name === null && value === null)
      return (this.fields.getTextareaOutput().innerHTML = '')

    if (name === null)
      return (this.fields.getTextareaOutput().innerHTML +=
        value.toFixed(2) + '\n')

    return (this.fields.getTextareaOutput().innerHTML +=
      name + ': ' + value.toFixed(2) + '\n')
  }
}
