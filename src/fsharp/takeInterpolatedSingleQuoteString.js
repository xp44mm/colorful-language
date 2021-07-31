import { takeHole } from './takeHole'

export const takeInterpolatedSingleQuoteString = (tokens, prefix, input) => {
    let res = /^(\\[\\"]|\{\{|[^"{])*(\{|"(B\b)?)/i.exec(input)
    let internal = res[0]
    let restInput = input.slice(internal.length)
    let token = { string: prefix + internal }

    if (res[2] === "{") {
        let { tokens: newTokens, restInput: restRestInput } = takeHole(takeInterpolatedSingleQuoteString, restInput)
        return { tokens: [...tokens, token, ...newTokens], restInput: restRestInput }
    } else {
        return { tokens: [...tokens, token], restInput }
    }
}


