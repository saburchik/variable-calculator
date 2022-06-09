import Main from '../Main.js'

class Print extends Main {
  constructor() {
    super()
  }
  getPrint(inputPrint) {
    let variableName = inputPrint.groups.keyName
    // == If the object is empty, throw the error:
    if (Object.keys(this.state).length === 0) {
      super.methodError(inputPrint)
    }
    for (let key in this.state) {
      if (variableName in this.state === false) {
        super.methodError(inputPrint)
      }
      if (key === variableName) {
        if (typeof this.state[key] === 'string') {
          super.printFunction(this.state[key], inputPrint)
        } else {
          super.getTextareaOutput().innerHTML += this.state[key] + '\n'
        }
      }
    }
    super.addInput(inputPrint)
    super.getInput().value = ''
  }
}

export default Print
