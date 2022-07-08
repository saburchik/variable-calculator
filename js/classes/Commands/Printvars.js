import SupportGeneral from '../../SupportGeneral.js'

export default class Printvars {
  constructor() {
    this.support = new SupportGeneral()
  }

  validation(storeVars, input) {
    this.support.addInTextareaOutput(null, null)
    const ordered = Object.keys(storeVars)
      .sort()
      .reduce((obj, key) => {
        obj[key] = storeVars[key]
        return obj
      }, {})

    for (let key in ordered) {
      let value = ordered[key]
      this.support.addInTextareaOutput(key, value)
    }

    this.support.addInTextareaInput(input)
    console.log(ordered)
  }
}
