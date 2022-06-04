class Fields {
  constructor() {}

  getForm() {
    const form = document.querySelector('form')
    return form
  }

  getInput() {
    const input = document.querySelector('input')
    return input
  }

  getButton() {
    this.getForm().onclick = (e) => e.preventDefault()
    const button = document.querySelector('button')
    return button
  }
}

class Command extends Fields {
  constructor() {}

  getVar() {}
  getLet() {}
  getFn() {}
  getPrint() {}
  getPrintvars() {}
  getPrint() {}
}
