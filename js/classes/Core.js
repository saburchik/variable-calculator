import Printfns from './Commands/Printfns.js'
import Var from './Commands/Var.js'
import Let from './Commands/Let.js'
import Printvars from './Commands/Printvars.js'
import Fn from './Commands/Fn.js'
import Print from './Commands/Print.js'

export default class Core {
  constructor() {
    this.storeVars = { x: 5, v: 'sum' }
    this.storeFns = { sum: 'x+x' }

    // this.storeVars = { x: 2, y: 4, z: 3 }
    // this.storeFns = {
    //   XPlusY: 'x+y',
    //   minus: 'x*z',
    //   multi: 'z*z',
    //   XPlusYDivZ: 'XPlusY/z',
    //   z: 'x-x',
    // }
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
