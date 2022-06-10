// == fn:
export const regFn =
  /^(fn)\s+(?<fnName>[a-zA-Z_$][a-zA-Z\d_$]*)=(?<valueOne>[a-zA-Z_$][a-zA-Z\d_$]*)(?<arithSign>[*/+-])?(?<valueTwo>[a-zA-Z_$][a-zA-Z\d_$]*)?$/
// == var:
export const regVar = /^(var)\s+(?<varName>[a-zA-Z_$][a-zA-Z\d_$]*)$/
// == let:
export const regLet =
  /^(let)\s+(?<letName>[a-zA-Z_$][a-zA-Z\d_$]*)=(?<letValue>\d+.\d+|\d+|[a-zA-Z_$][a-zA-Z\d_$]*)$/
// == print:
export const regPrint = /^(print)\s+(?<keyName>[a-zA-Z_$][a-zA-Z\d_$]*)$/
// == printvars:
export const regPrintvars = /^printvars$/

export const regCommands = /\bvar|let|fn|print|printvars|printfns\b/
