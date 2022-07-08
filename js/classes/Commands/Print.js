import { regArithmeticCalculations } from '../../regExp.js'
import SupportGeneral from '../../SupportGeneral.js'
import SupportPrint from '../../supportPrint.js'
import Errors from '../Errors.js'
import Fields from '../Fields.js'

export default class Print {
  constructor() {
    this.support = new SupportGeneral()
    this.supportPrint = new SupportPrint()
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
    }
    this.support.addInTextareaInput(input)
    this.fields.getInput().value = ''
  }
}
