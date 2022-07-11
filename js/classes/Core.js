import Printfns from '../commands/Printfns.js'
import Var from '../commands/Var.js'
import Let from '../commands/Let.js'
import Printvars from '../commands/Printvars.js'
import Fn from '../commands/Fn.js'
import Print from '../commands/Print.js'

export default class Core {
  constructor() {
    this.storeVars = { z: 3.5, x: 10, y: 4 }
    this.storeFns = {
      XPlusY: 'x+y',
      XPlusYDivZ: 'XPlusY/z',
    }
  }

  var(input) {
    const varCommand = new Var()
    return varCommand.validation(this.storeVars, this.storeFns, input)
  }
  let(input) {
    const letCommand = new Let()
    return letCommand.validation(this.storeVars, this.storeFns, input)
  }
  print(input) {
    const printCommand = new Print()
    return printCommand.validation(this.storeVars, this.storeFns, input)
  }
  printvars(input) {
    const printvarsCommand = new Printvars()
    return printvarsCommand.validation(this.storeVars, this.storeFns, input)
  }
  fn(input) {
    const fnCommand = new Fn()
    return fnCommand.validation(this.storeFns, this.storeVars, input)
  }
  printfns(input) {
    const printfnsCommand = new Printfns()
    return printfnsCommand.validation(this.storeVars, this.storeFns, input)
  }
}
