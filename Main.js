import Fields from './Fields.js'

class Main extends Fields {
  constructor() {
    super()
    this.marks = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b,
    }
  }

  store() {
    let obj = {}
    return obj
  }

  applyOperator(op, a, b) {
    if (op in this.marks) return this.marks[op](a, b)
    else throw Error(`unsupported operator: ${op}`)
  }

  addInput(field) {
    super.getTextareaInput().innerHTML += field.input + '\n'
    document.querySelector('h2').innerHTML = ''
  }

  fixNum(num, dec = 2) {
    const calcDec = Math.pow(10, dec)
    return Math.trunc(num * calcDec) / calcDec
  }

  methodError(input) {
    this.addInput(input)
    super.getInput().value = ''
    super.getTextareaOutput().innerHTML += NaN + '\n'
    throw Error(this.throwError(4))
  }

  printFunction(newValue, inputPrint) {
    let arithmeticOp = newValue.match(
      /^(?<valueOne>[a-zA-Z_$][a-zA-Z\d_$]*)(?<arithSign>[*/+-])(?<valueTwo>[a-zA-Z_$][a-zA-Z\d_$]*)$/
    )
    let variableOp = newValue.match(/^(?<valueOne>[a-zA-Z_$][a-zA-Z\d_$]*)$/)
    if (arithmeticOp) {
      let sign = arithmeticOp.groups.arithSign
      for (let key in this.state) {
        if (key !== arithmeticOp.groups.valueOne) {
          this.methodError(inputPrint)
        }
        if (key === arithmeticOp.groups.valueOne) {
          let saveValue1 = this.state[key]
          if (isNaN(saveValue1)) {
            this.methodError(inputPrint)
          }
          for (let key in this.state) {
            if (key === arithmeticOp.groups.valueTwo) {
              let saveValue2 = this.state[key]
              let res = this.applyOperator(sign, saveValue1, saveValue2)
              return (super.getTextareaOutput().innerHTML +=
                this.fixNum(res) + '\n')
            }
          }
        }
      }
    }
    if (variableOp) {
      let variableName = variableOp.groups.valueOne
      for (let key in this.state) {
        if (key === variableName) {
          super.getTextareaOutput().innerHTML += this.state[key] + '\n'
        }
      }
    }
    super.getInput().value = ''
  }
}

export default Main
