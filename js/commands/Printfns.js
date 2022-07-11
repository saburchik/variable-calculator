import SupportGeneral from '../classes/SupportGeneral.js'
import SupportPrint from '../classes/SupportPrint.js'
import { regArithmeticCalculations } from '../regExp.js'

export default class Printfns {
  constructor() {
    this.support = new SupportGeneral()
    this.supportPrint = new SupportPrint()
  }

  validation(storeVars, storeFns, input) {
    this.support.addInTextareaOutput(null, null)
    const orderedFns = this.support.sortNames(storeFns)

    for (let key in orderedFns) {
      const arithmeticOp = orderedFns[key].match(regArithmeticCalculations)
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
        orderedFns,
      }

      if (valueL in storeVars && valueR in storeVars) {
        this.supportPrint.validNameVar(obj)
      }
      if (valueL in orderedFns || valueR in orderedFns) {
        this.supportPrint.validNameFn(obj)
      }

      if (valueL in orderedFns === true && valueR in orderedFns === true) {
        throw Error('The both variable is function')
      }
    }

    this.support.addInTextareaInput(input)
    console.log(orderedFns)
  }
}
