import { takeInterpolatedSingleQuoteString } from './takeInterpolatedSingleQuoteString'

export const tryInterpolatedSingleQuoteString = (input) => {
    let res = /^\$"/.exec(input)
    if (res && res.length > 0) {
        let lexeme = res[0]
        let rest = input.slice(lexeme.length)
        return takeInterpolatedSingleQuoteString([], lexeme, rest)
    } else {
        return null
    }
}

