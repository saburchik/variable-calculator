import Main from '../Main.js'

class Printvars extends Main {
  constructor() {
    super()
  }
  getPrintvars(inputPrintvars) {
    const ordered = Object.keys(this.state)
      .sort()
      .reduce((obj, key) => {
        obj[key] = this.state[key]
        return obj
      }, {})

    super.getTextareaOutput().innerHTML = ''
    for (let key in ordered) {
      if (typeof this.state[key] !== 'string') {
        super.getTextareaOutput().innerHTML += key + ': ' + ordered[key] + '\n'
      }
    }
    super.addInput(inputPrintvars)
    super.getInput().value = ''
    console.log(ordered)
  }
}

export default Printvars
