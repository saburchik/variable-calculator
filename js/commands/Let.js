import SupportGeneral from '../classes/SupportGeneral.js'
import Errors from '../classes/Errors.js'

export default class Let {
  constructor() {
    this.support = new SupportGeneral()
    this.error = new Errors()
  }

  validation(storeVars, storeFns, input) {
    const letName = input.groups.letName
    const letValueString = input.groups.letValue
    const letValue = this.support.fixNumber(input.groups.letValue)

    if (Object.keys(storeVars).length >= 0) storeVars[letName] = letValue
    if (letName in storeFns) return this.error.throwError(1)
    if (letName in storeVars) {
      for (let key in storeVars) {
        if (key === letValue) {
          storeVars[letName] = storeVars[letValue]
        }
      }
    }
    if (letValueString) {
      for (let key in storeVars) {
        if (key === letValueString) {
          this.support.addInTextareaInput(input)
          return (storeVars[letName] = storeVars[key])
        }
      }
    }

    this.support.addInTextareaInput(input)
    console.log(storeVars)
  }
}
