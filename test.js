let num = 1.234
let num2 = 42

let res = num + num2

// console.log(Number.isInteger(res))
// console.log(num.toFixed(2))
// console.log(res.toFixed(2))
const str = '1221.12123 121,12'
const str1 = 'let x=1.87264'
let value = str.match(new RegExp('\\d+\\[.,]\\d+|\\d+'))
let value2 = str.match(/\d+[.,]?\d+/)

let parseNum = Number(value2[0])

//console.log(parseNum.toFixed(2))
// console.log(parseNum)
// console.log(value2)

let regexpFn = 'fn xPlusY 3*3'.match(
  new RegExp(`fn\\s(?<fnName>[a-zA-Z0-9]+)\\s(\\d)([*/|+-])(\\d)`)
)
console.log(regexpFn)
