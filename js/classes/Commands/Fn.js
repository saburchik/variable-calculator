import SupportGeneral from '../../SupportGeneral.js'
import Errors from '../Errors.js'

export default class Fn {
  constructor() {
    this.support = new SupportGeneral()
    this.error = new Errors()
  }

  validation(storeFns, storeVars, input) {
    const fnName = input.groups.fnName
    const valueL = input.groups.valueLeft
    const valueR = input.groups.valueRight
    const sign = input.groups.arithSign

    if (fnName in storeVars === true || fnName in storeFns === true)
      return this.error.throwError(1)

    if (sign === undefined && valueR === undefined) {
      storeFns[fnName] = `${valueL}`
    } else {
      storeFns[fnName] = `${valueL}${sign}${valueR}`
    }

    this.support.addInTextareaInput(input)
    console.log(storeFns)
  }
}
