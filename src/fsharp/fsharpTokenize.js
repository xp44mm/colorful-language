import { tokenizeConfig } from '../tokenizeConfig'
import { trySymbol } from '../trySymbol'
import { tryWhitespace } from '../tryWhitespace'
import { tryWord } from '../tryWord'
import { tryBang } from './tryBang'
import { tryBlockComment } from './tryBlockComment'
import { tryChar } from './tryChar'
import { tryDoubleTickIdentifier } from './tryDoubleTickIdentifier'
import { tryIdentifier } from './tryIdentifier'
import { tryInterpolatedSingleQuoteString } from './tryInterpolatedSingleQuoteString'
import { tryInterpolatedTripleQuoteString } from './tryInterpolatedTripleQuoteString'
import { tryInterpolatedVerbatimString } from './tryInterpolatedVerbatimString'
import { trySingleLineComment } from './trySingleLineComment'
import { trySingleQuoteString } from './trySingleQuoteString'
import { tryTripleQuoteString } from './tryTripleQuoteString'
import { tryTypeParameter } from './tryTypeParameter'
import { tryVerbatimString } from './tryVerbatimString'

export const fsharpTokenize = tokenizeConfig([
    tryWhitespace,
    trySingleLineComment,
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
    trySymbol,
])
