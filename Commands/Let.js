import Main from '../Main.js'

class Let extends Main {
  constructor() {
    super()
  }
  getLet(inputLet) {
    let variableName = inputLet.groups.letName
    let variableValue = super.fixNum(Number(inputLet.groups.letValue))

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
    super.addInput(inputLet)
    super.getInput().value = ''
    console.log(this.state)
  }
}

export default Let
