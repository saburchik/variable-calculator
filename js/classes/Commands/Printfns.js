import { regArithmeticCalculations } from '../../regExp.js'
import SupportGeneral from '../../SupportGeneral.js'
import SupportPrint from '../../supportPrint.js'
import Fields from '../Fields.js'

export default class Printfns {
  constructor() {
    this.support = new SupportGeneral()
    this.supportPrint = new SupportPrint()
    this.fields = new Fields()
  }

  validation(storeVars, storeFns, input) {
    // == Sorting through the keys in storeFns:
    for (let key in storeFns) {
      let arithmeticOp = storeFns[key].match(regArithmeticCalculations)
      let valueL = arithmeticOp.groups.valueLeft
      let valueR = arithmeticOp.groups.valueRight
      let sign = arithmeticOp.groups.arithSign
      // ---
      let functionName = key
      const obj = {
        storeVars,
        storeFns,
        valueL,
        valueR,
        sign,
        functionName,
        input,
      }

      if (valueL in storeFns === true || valueR in storeFns === true) {
        this.supportPrint.calcLeftFunc(obj)
      }
      if (valueL in storeFns === true && valueR in storeFns === true) {
        throw Error('The both variable is function')
      }
      this.supportPrint.justCalculation(obj)
    }

    // == Adding a command to the Input window and stripping the input field:
    this.support.addInTextareaInput(input)
    this.fields.getInput().value = ''
    console.log(storeFns)
  }
}
