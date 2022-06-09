import Main from '../Main.js'

class Var extends Main {
  constructor() {
    super()
  }
  getVar(inputVar) {
    let variableName = inputVar.groups.varName
    if (Object.keys(this.store()).length === 0) {
      this.store()[variableName] = NaN
    } else {
      for (let key in this.store()) {
        if (key === variableName) {
          throw Error(super.throwError(2))
        } else {
          this.store()[variableName] = NaN
        }
      }
    }
    super.addInput(inputVar)
    super.getInput().value = ''
    console.log(this.store())
  }
}

export default Var
