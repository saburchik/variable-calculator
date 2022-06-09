import Main from '../Main.js'

class Fn extends Main {
  constructor() {
    super()
  }
  getFn(inputFn) {
    let funcName = inputFn.groups.fnName
    let value1 = inputFn.groups.valueOne
    let value2 = inputFn.groups.valueTwo
    let sign = inputFn.groups.arithSign

    if (Object.keys(this.state).length === 0) {
      if (sign === undefined && value2 === undefined) {
        this.state[funcName] = `${value1}`
      } else {
        this.state[funcName] = `${value1}${sign}${value2}`
      }
    } else {
      for (let key in this.state) {
        if (key === funcName) {
          throw Error(super.throwError(2))
        } else {
          if (sign === undefined && value2 === undefined) {
            this.state[funcName] = `${value1}`
          } else {
            this.state[funcName] = `${value1}${sign}${value2}`
          }
        }
      }
    }
    super.addInput(inputFn)
    super.getInput().value = ''
    console.log(this.state)
  }
}

export default Fn
