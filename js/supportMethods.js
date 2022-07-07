import Fields from './classes/Fields.js'

export default class Support {
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
    else throw Error(`unsupported operator: ${op}`)
  }
  fixNumber(num, dec = 2) {
    const calcDec = Math.pow(10, dec)
    return Math.trunc(num * calcDec) / calcDec
  }
  isIntegerNumber(num, functionName) {
    return (this.fields.getTextareaOutput().innerHTML +=
      functionName + ': ' + num.toFixed(2) + '\n')
  }
  addInTextareaInput(field) {
    this.fields.getTextareaInput().innerHTML += field.input + '\n'
    document.querySelector('h2').innerHTML = ''
  }
}
