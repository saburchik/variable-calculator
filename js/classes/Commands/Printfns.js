import { arithmeticCalculations } from '../../regExp.js'
import Support from '../../supportMethods.js'
import Fields from '../Fields.js'

export default class Printfns {
  constructor() {
    this.support = new Support()
    this.fields = new Fields()
  }

  validation(storeVars, storeFns, input) {
    // == Sorting through the keys in storeFns:
    for (let key in storeFns) {
      let arithmeticOp = storeFns[key].match(arithmeticCalculations)
      let valueL = arithmeticOp.groups.valueLeft
      let valueR = arithmeticOp.groups.valueRight
      let sign = arithmeticOp.groups.arithSign
      // ---
      let functionName = key

      if (arithmeticOp) {
        for (let key in storeVars) {
          if (key === valueL) {
            let saveValueL = storeVars[key]
            // if (isNaN(saveValueL)) {
            //   error.notDeclared(input)
            // }
            if (valueR === undefined) {
              this.support.isIntegerNumber(saveValueL, functionName)
            }
            for (let key in storeVars) {
              if (key === valueR) {
                let saveValueR = storeVars[key]
                let res = this.support.calculation(sign, saveValueL, saveValueR)
                if (functionName) {
                  this.support.isIntegerNumber(res, functionName)
                }
              }
            }
          }
        }
      }
    }

    // == Adding a command to the Input window and stripping the input field:
    this.support.addInTextareaInput(input)
    this.fields.getInput().value = ''
    console.log(storeFns)
  }
}
