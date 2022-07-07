import Support from '../../supportMethods.js'
import Fields from '../Fields.js'

export default class Let {
  constructor() {
    this.support = new Support()
    this.fields = new Fields()
  }

  validation(storeVars, input) {
    let variableName = input.groups.letName
    let ifValueString = input.groups.letValue
    let variableValue = this.support.fixNumber(Number(input.groups.letValue))

    if (ifValueString) {
      for (let key in storeVars) {
        if (key === ifValueString) {
          this.support.addInTextareaInput(input)
          this.fields.getInput().value = ''
          return (storeVars[variableName] = storeVars[key])
        }
      }
    }

    if (Object.keys(storeVars).length === 0) {
      storeVars[variableName] = variableValue
    } else {
      storeVars[variableName] = variableValue
      for (let key in storeVars) {
        if (key === variableValue) {
          storeVars[variableName] = storeVars[variableValue]
        }
      }
    }
    this.support.addInTextareaInput(input)
    this.fields.getInput().value = ''
    console.log(storeVars)
  }
}
