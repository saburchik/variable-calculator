const inputValue = 'var asd'

if (inputValue.match(/[+-/*]/g)) {
  console.log(inputValue.match(/[+-/*]/g))
} else {
  throw Error('ohh no, error!')
}

if (inputValue.match(/var|let|fn|print/g)) {
  console.log(inputValue.match(/var|let|fn|print/g))
  textarea1.innerHTML += input.value + '\n'
} else {
  textarea1.innerHTML += input.value + '\n'
  textarea2.innerHTML += 'NaN' + '\n'
  throw Error('ohh no, error!')
}

console.log(inputValue.replace(/\s+/g, ' '))

inputValue.match(/\bvar|let|fn|print\b/g)

if (inputValue === null || '') {
  throw Error(this.throwError(0))
}

// \d matches a digit (equivalent to [0-9])
