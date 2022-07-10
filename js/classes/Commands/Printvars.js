import { regArithmeticCalculations } from '../../regExp.js'
import SupportGeneral from '../../SupportGeneral.js'
import SupportPrint from '../../supportPrint.js'

export default class Printvars {
  constructor() {
    this.support = new SupportGeneral()
    this.supportPrint = new SupportPrint()
  }

  validation(storeVars, storeFns, input) {
    this.support.addInTextareaOutput(null, null)
    const ordered = Object.keys(storeVars)
      .sort()
      .reduce((obj, key) => {
        obj[key] = storeVars[key]
        return obj
      }, {})

    for (let key in ordered) {
      let value = ordered[key]
      if (typeof value === 'string') {
        for (let key in storeFns) {
          if (key === value) {
            const arithmeticOp = storeFns[key].match(regArithmeticCalculations)
            const valueL = arithmeticOp.groups.valueLeft
            const valueR = arithmeticOp.groups.valueRight
            const sign = arithmeticOp.groups.arithSign
            let obj = { storeVars, valueL, valueR, sign }
            this.supportPrint.validNameVar(obj)
          }
        }
      }
      this.support.addInTextareaOutput(key, value)
    }

    this.support.addInTextareaInput(input)
    console.log(ordered)
  }
}
