import Fields from './Fields.js'

class LogicApp extends Fields {
  logic() {
    const inputValue = this.getInput().match(
      /\bvar|let|fn|print|printvars|printfns\b/
    )

    if (inputValue) {
      this.getTextarea1().innerHTML += this.getInput() + '\n'
      document.querySelector('h1').innerHTML = ' '
      console.log(inputValue)
    } else {
      this.getTextarea1().innerHTML += this.getInput() + '\n'
      this.getTextarea2().innerHTML += 'NaN' + '\n'
      throw Error(this.throwError(0))
    }
  }
}

const setFields = new Fields()
const startLogic = new LogicApp()

setFields.getButton().onclick = (e) => {
  startLogic.logic()
}
