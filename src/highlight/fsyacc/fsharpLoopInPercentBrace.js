import { matching } from 'structural-comparison'
import { trySymbol } from '../trySymbol'
import { tryWhitespace } from '../tryWhitespace'
import { tryWord } from '../tryWord'
import { tryAsterisk } from '../fsharp/tryAsterisk'
import { tryBang } from '../fsharp/tryBang'
import { tryBlockComment } from '../fsharp/tryBlockComment'
import { tryChar } from '../fsharp/tryChar'
import { tryDoubleTickIdentifier } from '../fsharp/tryDoubleTickIdentifier'
import { tryIdentifier } from '../fsharp/tryIdentifier'
import { tryInterpolatedSingleQuoteString } from '../fsharp/tryInterpolatedSingleQuoteString'
import { tryInterpolatedTripleQuoteString } from '../fsharp/tryInterpolatedTripleQuoteString'
import { tryInterpolatedVerbatimString } from '../fsharp/tryInterpolatedVerbatimString'
import { trySingleLineComment } from '../fsharp/trySingleLineComment'
import { trySingleQuoteString } from '../fsharp/trySingleQuoteString'
import { tryTripleQuoteString } from '../fsharp/tryTripleQuoteString'
import { tryTypeParameter } from '../fsharp/tryTypeParameter'
import { tryVerbatimString } from '../fsharp/tryVerbatimString'
import { tryToken } from '../tryToken'

export const fsharpTokenizeOnce = matching([
    tryWhitespace,
    trySingleLineComment,
    tryAsterisk,
    tryBlockComment,
    tryDoubleTickIdentifier,
    tryChar,
    tryTypeParameter,
    tryTripleQuoteString,
    tryVerbatimString,
    trySingleQuoteString,
    tryInterpolatedTripleQuoteString,
    tryInterpolatedSingleQuoteString,
    tryInterpolatedVerbatimString,
    tryBang,
    tryIdentifier,
    tryWord,
    tryToken(/^%\}/, '#text'),
    trySymbol,
])

export const fsharpLoopInPercentBrace = (outerLoop) => {
    function fsharpLoop(accTokens = [], input) {
        if (input === '') {
            return accTokens
        } else {
            let { token, tokens, restInput } = fsharpTokenizeOnce(input)
            if (token) {
                if (token === '%}') {
                    return () => outerLoop([...accTokens, token], restInput)
                } else {
                    return () => fsharpLoop([...accTokens, token], restInput)
                }
            } else if (tokens) {
                return () => fsharpLoop([...accTokens, ...tokens], restInput)
            }
        }
    }

    return fsharpLoop
}

