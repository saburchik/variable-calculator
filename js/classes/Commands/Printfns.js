import { regArithmeticCalculations } from '../../regExp.js'
import SupportGeneral from '../../SupportGeneral.js'
import SupportPrint from '../../supportPrint.js'

export default class Printfns {
  constructor() {
    this.support = new SupportGeneral()
    this.supportPrint = new SupportPrint()
  }

  validation(storeVars, storeFns, input) {
    this.support.addInTextareaOutput(null, null)
    for (let key in storeFns) {
      const arithmeticOp = storeFns[key].match(regArithmeticCalculations)
      const valueL = arithmeticOp.groups.valueLeft
      const valueR = arithmeticOp.groups.valueRight
      const sign = arithmeticOp.groups.arithSign
      const functionName = key
      const obj = {
        storeVars,
        storeFns,
        valueL,
        valueR,
        sign,
        functionName,
        input,
      }

      if (valueL in storeVars || valueR in storeVars) {
        this.supportPrint.validNameVar(obj)
      }
      if (valueL in storeFns || valueR in storeFns) {
        this.supportPrint.validNameFn(obj)
      }

      if (valueL in storeFns === true && valueR in storeFns === true) {
        throw Error('The both variable is function')
      }
    }

    this.support.addInTextareaInput(input)
    console.log(storeFns)
  }
}
