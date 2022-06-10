import Fields from './Fields.js'
import Errors from './Errors.js'
const error = new Errors()

class Core extends Fields {
  constructor() {
    super()
    this.marks = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b,
    }
    this.state = {}
  }

  calculation(op, a, b) {
    if (op in this.marks) return this.marks[op](a, b)
    else throw Error(`unsupported operator: ${op}`)
  }

  var(input) {
    let variableName = input.groups.varName

    if (Object.keys(this.state).length === 0) {
      this.state[variableName] = NaN
    } else {
      for (let key in this.state) {
        if (key === variableName) {
          throw Error(error.throwError(2))
        } else {
          this.state[variableName] = NaN
        }
      }
    }
    super.addInInput(input)
    super.getInput().value = ''
    console.log(this.state)
  }
  let(input) {
    let variableName = input.groups.letName
    let variableValue = super.fixNumber(Number(input.groups.letValue))

    if (Object.keys(this.state).length === 0) {
      this.state[variableName] = variableValue
    } else {
      this.state[variableName] = variableValue
      for (let key in this.state) {
        if (key === variableValue) {
          this.state[variableName] = this.state[variableValue]
        }
      }
    }
    super.addInInput(input)
    super.getInput().value = ''
    console.log(this.state)
  }
  print(input) {
    let variableName = input.groups.keyName

    if (Object.keys(this.state).length === 0) {
      error.notDeclared(input)
    }
    for (let key in this.state) {
      if (variableName in this.state === false) {
        error.notDeclared(input)
      }
      if (key === variableName) {
        if (typeof this.state[key] === 'string') {
          this.ifPrintFn(this.state[key], input)
        } else {
          super.getTextareaOutput().innerHTML += this.state[key] + '\n'
        }
      }
    }
    super.addInInput(input)
    super.getInput().value = ''
  }
  printvars(input) {
    const ordered = Object.keys(this.state)
      .sort()
      .reduce((obj, key) => {
        obj[key] = this.state[key]
        return obj
      }, {})

    super.getTextareaOutput().innerHTML = ''
    for (let key in ordered) {
      if (typeof this.state[key] !== 'string') {
        super.getTextareaOutput().innerHTML += key + ': ' + ordered[key] + '\n'
      }
    }
    super.addInInput(input)
    super.getInput().value = ''
    console.log(ordered)
  }
  fn(input) {
    let funcName = input.groups.fnName
    let value1 = input.groups.valueOne
    let value2 = input.groups.valueTwo
    let sign = input.groups.arithSign

    if (Object.keys(this.state).length === 0) {
      if (sign === undefined && value2 === undefined) {
        this.state[funcName] = `${value1}`
      } else {
        this.state[funcName] = `${value1}${sign}${value2}`
      }
    } else {
      for (let key in this.state) {
        if (key === funcName) {
          throw Error(error.throwError(2))
        } else {
          if (sign === undefined && value2 === undefined) {
            this.state[funcName] = `${value1}`
          } else {
            this.state[funcName] = `${value1}${sign}${value2}`
          }
        }
      }
    }
    super.addInInput(input)
    super.getInput().value = ''
    console.log(this.state)
  }
  ifPrintFn(expression, input) {
    let arithmeticOp = expression.match(
      /^(?<valueOne>[a-zA-Z_$][a-zA-Z\d_$]*)(?<arithSign>[*/+-])(?<valueTwo>[a-zA-Z_$][a-zA-Z\d_$]*)$/
    )
    let valueL = arithmeticOp.groups.valueOne
    let valueR = arithmeticOp.groups.valueTwo
    let sign = arithmeticOp.groups.arithSign
    // --------------------------------------
    // let variableOp = expression.match(/^(?<valueOne>[a-zA-Z_$][a-zA-Z\d_$]*)$/)
    // let valueAlone = variableOp.groups.valueOne

    if (arithmeticOp) {
      for (let key in this.state) {
        if (key === valueL) {
          let saveValueL = this.state[key]
          if (isNaN(saveValueL)) {
            error.notDeclared(input)
          }
          for (let key in this.state) {
            if (key === valueR) {
              let saveValueR = this.state[key]
              let res = this.calculation(sign, saveValueL, saveValueR)
              return (super.getTextareaOutput().innerHTML +=
                super.fixNumber(res) + '\n')
            }
          }
        }
      }
    }
    super.getInput().value = ''
  }
}

export default Core
