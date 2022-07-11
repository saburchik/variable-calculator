class Errors {
  throwError(num) {
    const arrayErrors = [
      'Syntax Error! The input field is empty or there is no such command!',
      'The variable has already been assigned',
      'The variable is not declared',
    ]
    return (document.querySelector('h2').innerHTML = arrayErrors[num])
  }
}

export default Errors
