import { matching } from "structural-comparison"
import { trySingleLineComment } from '../fsharp/trySingleLineComment'
import { trySymbol } from '../trySymbol'
import { tryWhitespace } from '../tryWhitespace'
import { tryWord } from '../tryWord'
import { tryBlockComment } from './tryBlockComment'
import { tryChar } from './tryChar'
import { tryIdentifier } from './tryIdentifier'
import { tryString } from './tryString'

export const fslexTokenizeOnce = matching([
    tryWhitespace,
    trySingleLineComment,
    tryBlockComment,
    tryChar,
    tryString,
    tryIdentifier,
    tryWord,
    trySymbol,
])

