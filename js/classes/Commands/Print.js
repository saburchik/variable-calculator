import { arithmeticCalculations } from '../../regExp.js'
import Support from '../../supportMethods.js'
import Errors from '../Errors.js'
import Fields from '../Fields.js'

export default class Print {
  constructor() {
    this.support = new Support()
    this.fields = new Fields()
    this.error = new Errors()
  }

  validation(storeVars, storeFns, input) {
    console.log(input)
    let variableName = input.groups.keyName

    if (Object.keys(storeVars).length === 0) {
      this.error.notDeclared(input)
    }
    if (variableName in storeVars === false) {
      if (variableName in storeFns === false) {
        return this.error.notDeclared(input)
      } else {
        this.ifPrintFn(storeVars, storeFns, input)
      }
    }
    for (let key in storeVars) {
      if (key === variableName && isNaN(storeVars[key])) {
        return this.error.notDeclared(input)
      }
      if (key === variableName) {
        this.support.addInTextareaInput(input)
        this.fields.getInput().value = ''
        return (this.fields.getTextareaOutput().innerHTML +=
          variableName + ': ' + storeVars[key].toFixed(2) + '\n')
      }
    }
  }
  ifPrintFn(storeVars, storeFns, input) {
    let variableName = input.groups.keyName

    for (let key in storeFns) {
      if (key === variableName) {
        let arithmeticOp = storeFns[key].match(arithmeticCalculations)
        let valueL = arithmeticOp.groups.valueLeft
        let valueR = arithmeticOp.groups.valueRight
        let sign = arithmeticOp.groups.arithSign
        // ---
        let functionName = key

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
                  return this.support.isIntegerNumber(res, functionName)
                }
              }
            }
          }
        }
      }
    }
  }
}
