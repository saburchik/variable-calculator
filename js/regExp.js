// == Base:
export const regRemovingSpaces = /^\s+|\s+$|(\s)\s+/g
export const regCommands = /\bvar|let|fn|print|printvars|printfns\b/
export const regArithmeticCalculations =
  /^(?<valueLeft>[a-zA-Z_$][a-zA-Z\d_$]*)(?<arithSign>[*/+-])?(?<valueRight>[a-zA-Z_$][a-zA-Z\d_$]*)?$/

// == RegExp for commands:
export const regFn =
  /^(fn)\s(?<fnName>[a-zA-Z_$][a-zA-Z\d_$]*)\s?=\s?(?<valueLeft>[a-zA-Z_$][a-zA-Z\d_$]*)\s?(?<arithSign>[*/+-])?\s?(?<valueRight>[a-zA-Z_$][a-zA-Z\d_$]*)?$/
export const regVar = /^(var)\s+(?<name>[a-zA-Z_$][a-zA-Z\d_$]*)$/
export const regLet =
  /^(let)\s(?<letName>[a-zA-Z_$][a-zA-Z\d_$]*)\s?=\s?(?<letValue>\d+.\d+|\d+|[a-zA-Z_$][a-zA-Z\d_$]*)$/
export const regPrint = /^(print)\s+(?<keyName>[a-zA-Z_$][a-zA-Z\d_$]*)$/
export const regPrintvars = /^printvars$/
export const regPrintfns = /^printfns$/
