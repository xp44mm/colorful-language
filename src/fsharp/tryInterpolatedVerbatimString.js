import { takeInterpolatedVerbatimString } from './takeInterpolatedVerbatimString'

export const tryInterpolatedVerbatimString = (input) => {
    let res = /^(\$@|@\$)"/.exec(input)
    if (res && res.length > 0) {
        let lexeme = res[0]
        let rest = input.slice(lexeme.length)
        return takeInterpolatedTripleQuoteString([], lexeme, rest)
    } else {
        return null
    }
}

