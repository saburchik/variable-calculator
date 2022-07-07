import Support from '../../supportMethods.js'
import Fields from '../Fields.js'

export default class Printvars {
  constructor() {
    this.support = new Support()
    this.fields = new Fields()
  }

  validation(storeVars, input) {
    // == Sort by alphabetical order:
    const ordered = Object.keys(storeVars)
      .sort()
      .reduce((obj, key) => {
        obj[key] = storeVars[key]
        return obj
      }, {})

    // == Cleaning the output window:
    this.fields.getTextareaOutput().innerHTML = ''

    // == Output of variables + adding hundredths:
    for (let key in ordered) {
      this.fields.getTextareaOutput().innerHTML +=
        key + ': ' + ordered[key].toFixed(2) + '\n'
    }

    // == Adding a command to the Input window and stripping the input field:
    this.support.addInTextareaInput(input)
    this.fields.getInput().value = ''
    console.log(ordered)
  }
}
