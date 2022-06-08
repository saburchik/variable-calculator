import Fields from './Fields.js'

class Commands extends Fields {
  constructor() {
    super()
    this.marks = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b,
    }
    this.variables = { x: 11, y: 14 }
  }

  applyOperator(op, a, b) {
    if (op in this.marks) return this.marks[op](a, b)
    else throw Error(`unsupported operator: ${op}`)
  }

  addInput(current) {
    super.getTextarea1().innerHTML += current.input + '\n'
    document.querySelector('h2').innerHTML = ''
  }

  fixNum(num, dec = 2) {
    const calcDec = Math.pow(10, dec)
    return Math.trunc(num * calcDec) / calcDec
  }

  startVar(inputVar) {
    if (inputVar) {
      let variableName = inputVar.groups.varName
      if (Object.keys(this.variables).length === 0) {
        this.variables[variableName] = NaN
      } else {
        for (let key in this.variables) {
          if (key === variableName) {
            throw Error(this.throwError(2))
          } else {
            this.variables[variableName] = NaN
          }
        }
      }
      this.addInput(inputVar)
    }
    super.getInput().value = ''
    console.log(this.variables)
  }
  startLet(inputLet) {
    if (inputLet) {
      let variableName = inputLet.groups.letName
      let variableValue = inputLet.groups.letValue
      let fixingValue = this.fixNum(Number(variableValue))

      if (Object.keys(this.variables).length === 0) {
        this.variables[variableName] = fixingValue
      } else {
        this.variables[variableName] = fixingValue
        for (let key in this.variables) {
          if (key === variableValue) {
            this.variables[variableName] = this.variables[variableValue]
          }
        }
      }
      this.addInput(inputLet)
    }
    super.getInput().value = ''
    console.log(this.variables)
  }

  printFunction(newValue) {
    let arithmeticOp = newValue.match(
      /^(?<valueOne>[a-zA-Z_$][a-zA-Z\d_$]*)(?<arithSign>[*/+-])(?<valueTwo>[a-zA-Z_$][a-zA-Z\d_$]*)$/
    )
    let sign = arithmeticOp.groups.arithSign
    if (arithmeticOp) {
      for (let key in this.variables) {
        if (key === arithmeticOp.groups.valueOne) {
          let saveValue1 = this.variables[key]
          for (let key in this.variables) {
            if (key === arithmeticOp.groups.valueTwo) {
              let saveValue2 = this.variables[key]
              let res = this.applyOperator(sign, saveValue1, saveValue2)
              super.getTextarea2().innerHTML += this.fixNum(res) + '\n'
            }
          }
        }
      }
    }
    super.getInput().value = ''
  }

  getPrint(inputPrint) {
    let variableName = inputPrint.groups.keyName
    if (inputPrint) {
      for (let key in this.variables) {
        if (key === variableName) {
          if (this.variables[key] !== NaN || Number) {
            this.printFunction(this.variables[key])
          } else {
            super.getTextarea2().innerHTML += this.variables[key] + '\n'
          }
        } else {
          super.getTextarea2().innerHTML += NaN + '\n'
        }
        // if (key !== variableName) {
        //   super.getTextarea2().innerHTML += NaN + '\n'
        // }
      }
    }
    this.addInput(inputPrint)
  }
  getPrintvars() {
    const ordered = Object.keys(this.variables)
      .sort()
      .reduce((obj, key) => {
        obj[key] = this.variables[key]
        return obj
      }, {})

    super.getTextarea2().innerHTML = ''
    for (let key in ordered) {
      super.getTextarea2().innerHTML += key + ': ' + ordered[key] + '\n'
    }
    console.log(ordered)
  }

  getFn(inputFn) {
    if (inputFn) {
      let funcName = inputFn.groups.fnName
      let value1 = inputFn.groups.valueOne
      let value2 = inputFn.groups.valueTwo
      let sign = inputFn.groups.arithSign

      if (Object.keys(this.variables).length === 0) {
        this.variables[funcName] = sign
      } else {
        for (let key in this.variables) {
          if (key === funcName) {
            throw Error(this.throwError(2))
          } else {
            this.variables[funcName] = `${value1}${sign}${value2}`
          }
        }
      }
      this.addInput(inputFn)
    }
    super.getInput().value = ''
    console.log(this.variables)
  }
}

export default Commands
