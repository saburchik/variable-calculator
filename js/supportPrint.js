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
    this.support = new SupportGeneral()
  }
  // вычисление, если арифметическая операция в функции производится над переменными:
  validNameVar(obj) {
    const { storeVars, valueL, valueR, sign } = obj
    for (let key in storeVars) {
      if (key === valueL) {
        let saveValueL = storeVars[key]
        if (valueR === undefined)
          return this.support.addInTextareaOutput(null, saveValueL)

        for (let key in storeVars) {
          if (key === valueR) {
            let saveValueR = storeVars[key]
            let res = this.support.calculation(sign, saveValueL, saveValueR)
            return this.support.addInTextareaOutput(null, res)
          }
        }
      }
    }
  }
  // вычисление, если в функции левая или правая переменная это функция
  validNameFn(obj) {
    const { storeVars, storeFns, valueL, valueR, sign } = obj
    for (let key in storeFns) {
      if (key === valueL || key === valueR) {
        const arithmeticOpValue = storeFns[key].match(regArithmeticCalculations)
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
                    return this.support.addInTextareaOutput(null, finalResult)
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  calc(storeVars, storeFns, letName, letValueString, input) {
    for (let key in storeFns) {
      if (key === letValueString) {
        const arithmeticOp = storeFns[key].match(regArithmeticCalculations)
        const valueL = arithmeticOp.groups.valueLeft
        const valueR = arithmeticOp.groups.valueRight
        const sign = arithmeticOp.groups.arithSign

        for (let key in storeVars) {
          if (key === valueL) {
            let saveValueL = storeVars[key]
            if (valueR === undefined)
              return this.support.addInTextareaOutput(null, saveValueL)

            for (let key in storeVars) {
              if (key === valueR) {
                let saveValueR = storeVars[key]
                let res = this.support.calculation(sign, saveValueL, saveValueR)
                this.support.addInTextareaInput(input)
                return (storeVars[letName] = res)
              }
            }
          }
        }
      }
    }
  }
}
