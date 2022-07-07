// == fn:
export const regFn =
  /^(fn)\s(?<fnName>[a-zA-Z_$][a-zA-Z\d_$]*)\s?=\s?(?<valueLeft>[a-zA-Z_$][a-zA-Z\d_$]*)\s?(?<arithSign>[*/+-])?\s?(?<valueRight>[a-zA-Z_$][a-zA-Z\d_$]*)?$/
// == var:
export const regVar = /^(var)\s+(?<varName>[a-zA-Z_$][a-zA-Z\d_$]*)$/
// == let:
export const regLet =
  /^(let)\s(?<letName>[a-zA-Z_$][a-zA-Z\d_$]*)\s?=\s?(?<letValue>\d+.\d+|\d+|[a-zA-Z_$][a-zA-Z\d_$]*)$/
// == print:
export const regPrint = /^(print)\s+(?<keyName>[a-zA-Z_$][a-zA-Z\d_$]*)$/
// == printvars:
export const regPrintvars = /^printvars$/
// == printfns:
export const regPrintfns = /^printfns$/
// == arithmeticCalculations:
export const arithmeticCalculations =
  /^(?<valueLeft>[a-zA-Z_$][a-zA-Z\d_$]*)(?<arithSign>[*/+-])?(?<valueRight>[a-zA-Z_$][a-zA-Z\d_$]*)?$/

export const regCommands = /\bvar|let|fn|print|printvars|printfns\b/
