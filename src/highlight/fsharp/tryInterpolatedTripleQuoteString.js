import { takeHole } from './takeHole'

const takeInterpolatedTripleQuoteString = (tokens, prefix, input) => {
    let res = /^(\{\{|[^{])*(\{|"""(B\b)?)/i.exec(input)
    let internal = res[0]
    let restInput = input.slice(internal.length)
    let token = { string: prefix + internal }

    if (res[2] === "{") {
        let { tokens: newTokens, restInput: restRestInput } = takeHole(takeInterpolatedTripleQuoteString, restInput)
        return { tokens: [...tokens, token, ...newTokens], restInput: restRestInput }
    } else {
        return { tokens: [...tokens, token], restInput }
    }
}

export const tryInterpolatedTripleQuoteString = (input) => {
    let res = /^\$"""/.exec(input)
    if (res && res.length > 0) {
        let lexeme = res[0]
        let rest = input.slice(lexeme.length)
        return takeInterpolatedTripleQuoteString([], lexeme, rest)
    } else {
        return null
    }
}
