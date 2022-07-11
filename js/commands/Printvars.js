import SupportGeneral from '../classes/SupportGeneral.js'

export default class Printvars {
  constructor() {
    this.support = new SupportGeneral()
  }

  validation(storeVars, input) {
    this.support.addInTextareaOutput(null, null)
    const orderedVars = this.support.sortNames(storeVars)

    for (let key in orderedVars) {
      let value = orderedVars[key]
      this.support.addInTextareaOutput(key, value)
    }

    this.support.addInTextareaInput(input)
    console.log(orderedVars)
  }
}
