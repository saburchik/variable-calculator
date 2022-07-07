import Support from '../../supportMethods.js'
import Fields from '../Fields.js'

export default class Var {
  constructor() {
    this.support = new Support()
    this.fields = new Fields()
  }

  validation(storeVars, input) {
    let variableName = input.groups.varName

    if (Object.keys(storeVars).length === 0) {
      storeVars[variableName] = NaN
    } else {
      for (let key in storeVars) {
        if (key === variableName) {
          throw Error(error.throwError(2))
        } else {
          storeVars[variableName] = NaN
        }
      }
    }
    this.support.addInTextareaInput(input)
    this.fields.getInput().value = ''
    console.log(storeVars)
  }
}
