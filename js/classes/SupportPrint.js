import { regArithmeticCalculations } from '../regExp.js'
import SupportGeneral from './SupportGeneral.js'

export default class SupportPrint {
  constructor() {
    this.marks = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b,
    }
    this.support = new SupportGeneral()
  }
  // == Calculation if an arithmetic operation in a function is performed on variables:
  validNameVar(obj) {
    const { storeVars, valueL, valueR, sign, functionName = null } = obj
    for (let key in storeVars) {
      if (key === valueL) {
        let saveValueL = storeVars[key]
        if (valueR === undefined)
          return this.support.addInTextareaOutput(functionName, saveValueL)

        for (let key in storeVars) {
          if (key === valueR) {
            let saveValueR = storeVars[key]
            let res = this.support.calculation(sign, saveValueL, saveValueR)
            return this.support.addInTextareaOutput(functionName, res)
          }
        }
      }
    }
  }
  // == Calculation if one of the values is a function:
  validNameFn(obj) {
    const {
      storeVars,
      storeFns,
      orderedFns = storeFns,
      valueL,
      valueR,
      sign,
      functionName = null,
    } = obj
    for (let key in orderedFns) {
      if (key === valueL || key === valueR) {
        const arithmeticOpValue = orderedFns[key].match(
          regArithmeticCalculations
        )
        const valueLValue = arithmeticOpValue.groups.valueLeft
        const valueRValue = arithmeticOpValue.groups.valueRight
        const signValue = arithmeticOpValue.groups.arithSign

        for (let key in storeVars) {
          if (key === valueLValue) {
            let saveValueLV = storeVars[key]

            for (let key in storeVars) {
              if (key === valueRValue) {
                let saveValueRV = storeVars[key]
                let res = this.support.calculation(
                  signValue,
                  saveValueLV,
                  saveValueRV
                )
                for (let key in storeVars) {
                  if (key === valueR || key === valueL) {
                    let finalResult = this.support.calculation(
                      sign,
                      res,
                      storeVars[key]
                    )
                    return this.support.addInTextareaOutput(
                      functionName,
                      finalResult
                    )
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
