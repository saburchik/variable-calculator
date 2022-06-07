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
    this.variables = {}
  }

  saveNameLet() {
    return this.getTextarea1().value.match(
      /let\s(?<letKey>[a-zA-Z0-9]+)=(?<letValue>\d+.\d+|\d+)/
    )
  }
  saveNameVar() {
    return this.getTextarea1().value.match(/var\s(?<varKey>[a-zA-Z0-9]+)/m)
  }

  applyOperator(op, a, b) {
    if (op in this.marks) return this.marks[op](a, b)
    else throw Error(`unsupported operator: ${op}`)
  }

  addInput(current) {
    this.getTextarea1().innerHTML += current.input + '\n'
    document.querySelector('h1').innerHTML = ''
  }

  getVarAndLet() {
    let current = this.getInput().value.match(
      /(let|var)\s(?<varName>[a-zA-Z0-9]+)?=?(?<varValue>\d+.\d+|\d+)?/
    )
    let fidex = Number(current.groups.varValue).toFixed(3).replace(/.$/, '')

    if (Object.keys(this.variables).length == 0) {
      if (fidex === 'NaN') {
        this.variables[current.groups.varName] = NaN
      } else {
        this.variables[current.groups.varName] = fidex
      }
    } else {
      for (let key in this.variables) {
        if (key === current.groups.varName) {
          if (fidex !== 'NaN') {
            this.variables[key] = fidex
          } else {
            throw Error(this.throwError(2))
          }
        } else {
          if (fidex === 'NaN') {
            this.variables[current.groups.varName] = NaN
          } else {
            this.variables[current.groups.varName] = fidex
          }
        }
      }
    }

    this.addInput(current)
    this.getInput().value = ''
    console.log(this.variables)
  }
  getFn(newValue) {
    if (this.getInput().value.match(/fn/)) {
      if (this.saveNameVar() === null && this.saveNameLet() === null) {
        if (newValue[2] === newValue[4]) {
          throw Error(`The ${newValue[2]} is not defined`)
        } else {
          throw Error(`${newValue[2]} and ${newValue[4]} is not defined`)
        }
      }
    }
  }
  getPrint(newValue) {
    debugger
    if (this.saveNameVar().groups.varKey === this.saveNameLet().groups.letKey) {
      debugger
      let regexpFn = this.getTextarea1().value.match(
        new RegExp(
          `fn\\s(?<fnName>[a-zA-Z0-9]+)\\s${
            this.saveNameLet().groups.letKey
          }[*/|+-]${this.saveNameLet().groups.letKey}`
        )
      )
      if (regexpFn) {
        debugger
        let arithmeticSign = newValue[3]
        let calc = this.applyOperator(
          arithmeticSign,
          Number(this.saveNameLet().groups.letValue),
          Number(this.saveNameLet().groups.letValue)
        )
        this.getTextarea2().innerHTML = calc + '\n'
        console.log(regexpFn)
        console.log(calc)
      }
    } else {
      throw Error('Переменные не былт обьявлены')
    }
  }
  getPrintvars() {
    const ordered = Object.keys(this.variables)
      .sort()
      .reduce((obj, key) => {
        obj[key] = this.variables[key]
        return obj
      }, {})

    this.getTextarea2().innerHTML = ''
    for (let key in ordered) {
      this.getTextarea2().innerHTML += key + ' : ' + ordered[key] + '\n'
    }
    console.log(ordered)
  }
}

export default Commands
