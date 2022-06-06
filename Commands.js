import Fields from './Fields.js'

class Commands extends Fields {
  constructor() {
    super()
    this.marks = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b,
    }
  }

  saveNameLet() {
    return this.getTextarea1().value.match(
      /let\s(?<letKey>[a-zA-Z0-9]+)=(?<letValue>\d+.\d+|\d+)/
    )
  }
  saveNameVar() {
    return this.getTextarea1().value.match(/var\s(?<varKey>[a-zA-Z0-9]+)/m)
  }

  applyOperator(op, a, b) {
    if (op in this.marks) return this.marks[op](a, b)
    else throw Error(`unsupported operator: ${op}`)
  }

  getVar() {}
  getLet() {}
  getFn(newValue) {
    let arithmeticSign = newValue[3]
    console.log(arithmeticSign)
    if (this.getInput().value.match(/fn/)) {
      if (this.saveNameVar() === null && this.saveNameLet() === null) {
        if (newValue[2] === newValue[4]) {
          throw Error(`The ${newValue[2]} is not defined`)
        } else {
          throw Error(`${newValue[2]} and ${newValue[4]} is not defined`)
        }
      } else if (
        this.saveNameVar().groups.varKey === this.saveNameLet().groups.letKey
      ) {
        debugger
        let regexpFn = this.getInput().value.match(
          new RegExp(
            `fn\\s(?<fnName>[a-zA-Z0-9]+)\\s${
              this.saveNameLet().groups.letKey
            }[*/|+-]${this.saveNameLet().groups.letKey}`
          )
        )
        if (regexpFn) {
          debugger
          //   let arif = `
          //     ${Number(this.saveNameLet().groups.letValue)} ${arithmeticSign}
          //     ${Number(this.saveNameLet().groups.letValue)}`
          let calc = this.applyOperator(
            arithmeticSign,
            Number(this.saveNameLet().groups.letValue),
            Number(this.saveNameLet().groups.letValue)
          )
          this.getTextarea2().innerHTML = calc + '\n'
          console.log(regexpFn)
          console.log(calc)
        }
      }
    }
    // if (this.saveNameVar().groups.varKey === this.saveNameLet().groups.letKey) {
    //   debugger
    //   let regexpFn = this.getInput().value.match(
    //     new RegExp(
    //       `fn\\s(?<fnName>[a-zA-Z0-9]+)\\s${saveNameLet.groups.letKey}\\+${saveNameLet.groups.letKey}`
    //     )
    //   )
    //   if (regexpFn) {
    //     let arif =
    //       Number(saveNameLet.groups.letValue) +
    //       Number(saveNameLet.groups.letValue)
    //     this.getTextarea2().innerHTML = arif + '\n'
    //     console.log(regexpFn)
    //     console.log(arif)
    //   }
    // }

    //console.log(newValue)
    // let checkFn = new RegExp(
    //   `fn\\s(?<fnName>[a-zA-Z0-9]+)\\s${saveNameLet.groups.letKey}\\+${saveNameLet.groups.letKey}`
    // )
  }
  getPrint() {}
  getPrintvars() {}
  getPrint() {}
}

export default Commands
