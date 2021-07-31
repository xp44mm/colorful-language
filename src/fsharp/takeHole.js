﻿import { matching } from 'structural-comparison'
import { trySymbol } from '../trySymbol'
import { tryWhitespace } from '../tryWhitespace'
import { tryWord } from '../tryWord'
import { tryBang } from './tryBang'
import { tryBlockComment } from './tryBlockComment'
import { tryChar } from './tryChar'
import { tryDoubleTickIdentifier } from './tryDoubleTickIdentifier'
import { tryIdentifier } from './tryIdentifier'
import { trySingleLineComment } from './trySingleLineComment'
import { trySingleQuoteString } from './trySingleQuoteString'
import { tryTripleQuoteString } from './tryTripleQuoteString'
import { tryTypeParameter } from './tryTypeParameter'
import { tryVerbatimString } from './tryVerbatimString'

const tokenizers = [
    tryWhitespace,
    trySingleLineComment,
    tryBlockComment,
    tryDoubleTickIdentifier,
    tryChar,
    tryTypeParameter,
    tryTripleQuoteString,
    tryVerbatimString,
    trySingleQuoteString,
    tryBang,
    tryIdentifier,
    tryWord,
    trySymbol,
]

export const takeHole = (takeInterpolatedStringInternal, input) => {
    const tokenizeOnce = (input) => matching(tokenizers, input)
    const loop = (tokens = [], input) => {
        let { token, restInput } = tokenizeOnce(input)
        if (token === "}") {
            return takeInterpolatedStringInternal(tokens, "}", restInput)
        } else {
            return loop([...tokens, token], restInput)
        }
    }
    return loop([],input)
}
