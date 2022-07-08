import SupportGeneral from '../../SupportGeneral.js'
import Errors from '../Errors.js'

export default class Var {
  constructor() {
    this.support = new SupportGeneral()
    this.error = new Errors()
  }

  validation(storeVars, storeFns, input) {
    const varName = input.groups.name

    if (varName in storeVars === true || varName in storeFns === true)
      return this.error.throwError(1)

    if (Object.keys(storeVars).length >= 0) storeVars[varName] = NaN

    this.support.addInTextareaInput(input)
    console.log(storeVars)
  }
}
