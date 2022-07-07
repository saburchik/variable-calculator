import Fields from './Fields.js'
import Printfns from './Commands/Printfns.js'
import Var from './Commands/Var.js'
import Let from './Commands/Let.js'
import Printvars from './Commands/Printvars.js'
import Fn from './Commands/Fn.js'
import Print from './Commands/Print.js'

class Core extends Fields {
  constructor() {
    super()
    this.storeVars = { x: 3, y: 4 }
    this.storeFns = { XPlusY: 'x+x', minus: 'x*z', multi: 'z*z' }
  }

  var(input) {
    const varCommand = new Var()
    return varCommand.validation(this.storeVars, input)
  }
  let(input) {
    const letCommand = new Let()
    return letCommand.validation(this.storeVars, input)
  }
  printvars(input) {
    const printvarsCommand = new Printvars()
    return printvarsCommand.validation(this.storeVars, input)
  }
  fn(input) {
    const fnCommand = new Fn()
    return fnCommand.validation(this.storeFns, input)
  }
  printfns(input) {
    const printfnsCommand = new Printfns()
    return printfnsCommand.validation(this.storeVars, this.storeFns, input)
  }

  print(input) {
    const printCommand = new Print()
    return printCommand.validation(this.storeVars, this.storeFns, input)
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
