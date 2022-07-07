import Support from '../../supportMethods.js'
import Fields from '../Fields.js'

export default class Fn {
  constructor() {
    this.support = new Support()
    this.fields = new Fields()
  }

  validation(storeFns, input) {
    let functionName = input.groups.fnName
    let valueL = input.groups.valueLeft
    let valueR = input.groups.valueRight
    let sign = input.groups.arithSign

    if (Object.keys(storeFns).length === 0) {
      if (sign === undefined && valueR === undefined) {
        storeFns[functionName] = `${valueL}`
      } else {
        storeFns[functionName] = `${valueL}${sign}${valueR}`
      }
    } else {
      for (let key in storeFns) {
        if (key === functionName) {
          throw Error(error.throwError(2))
        } else {
          if (sign === undefined && valueR === undefined) {
            storeFns[functionName] = `${valueL}`
          } else {
            storeFns[functionName] = `${valueL}${sign}${valueR}`
          }
        }
      }
    }
    this.support.addInTextareaInput(input)
    this.fields.getInput().value = ''
    console.log(storeFns)
  }
}
