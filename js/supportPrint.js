import Fields from './classes/Fields.js'
import { regArithmeticCalculations } from './regExp.js'
import SupportGeneral from './SupportGeneral.js'

export default class SupportPrint {
  constructor() {
    this.marks = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b,
    }
    this.fields = new Fields()
    this.support = new SupportGeneral()
  }
  // вычисление, если арифметическая операция в функции производится над переменными:
  justCalculation(obj) {
    const { storeVars, valueL, valueR, sign, functionName, input } = obj
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
  // вычисление, если в функции левая или правая переменная это функция
  calcLeftFunc(obj) {
    const { storeVars, storeFns, valueL, valueR, sign, functionName, input } =
      obj
    for (let key in storeFns) {
      if (key === valueL || key === valueR) {
        let arithmeticOpV = storeFns[key].match(regArithmeticCalculations)
        let valueLV = arithmeticOpV.groups.valueLeft
        let valueRV = arithmeticOpV.groups.valueRight
        let signV = arithmeticOpV.groups.arithSign
        let functionNameV = key

        for (let key in storeVars) {
          if (key === valueLV) {
            let saveValueLV = storeVars[key]
            // if (isNaN(saveValueL)) {
            //   error.notDeclared(input)
            // }
            if (valueRV === undefined) {
              this.support.isIntegerNumber(saveValueLV, functionNameV)
            }
            for (let key in storeVars) {
              if (key === valueRV) {
                let saveValueRV = storeVars[key]
                let res = this.support.calculation(
                  signV,
                  saveValueLV,
                  saveValueRV
                )
                for (let key in storeVars) {
                  if (key === valueR || key === valueL) {
                    let resExp = this.support.calculation(
                      sign,
                      res,
                      storeVars[key]
                    )
                    if (functionName) {
                      return this.support.isIntegerNumber(resExp, functionName)
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
}
