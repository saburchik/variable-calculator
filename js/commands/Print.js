import SupportGeneral from '../classes/SupportGeneral.js'
import SupportPrint from '../classes/SupportPrint.js'
import Errors from '../classes/Errors.js'
import { regArithmeticCalculations } from '../regExp.js'

export default class Print {
  constructor() {
    this.support = new SupportGeneral()
    this.supportPrint = new SupportPrint()
    this.error = new Errors()
  }

  validation(storeVars, storeFns, input) {
    let printName = input.groups.keyName

    if (printName in storeVars === false && printName in storeFns === false)
      return this.error.throwError(2)

    if (printName in storeVars) {
      for (let key in storeVars) {
        if (key === printName) {
          this.support.addInTextareaInput(input)
          return this.support.addInTextareaOutput(null, storeVars[key])
        }
      }
    }

    if (printName in storeFns) this.validationFn(storeVars, storeFns, input)
  }

  validationFn(storeVars, storeFns, input) {
    let fnName = input.groups.keyName

    for (let key in storeFns) {
      if (key === fnName) {
        const arithmeticOp = storeFns[key].match(regArithmeticCalculations)
        const valueL = arithmeticOp.groups.valueLeft
        const valueR = arithmeticOp.groups.valueRight
        const sign = arithmeticOp.groups.arithSign
        const obj = {
          storeVars,
          storeFns,
          valueL,
          valueR,
          sign,
          input,
        }

        if (
          (valueL in storeVars && valueR in storeVars) ||
          valueR === undefined
        )
          this.supportPrint.validNameVar(obj)
        if (valueL in storeFns || valueR in storeFns)
          this.supportPrint.validNameFn(obj)

        if (valueL in storeFns && valueR in storeFns) {
          throw Error('The both variable is function')
        }
      }
    }
    this.support.addInTextareaInput(input)
  }
}
