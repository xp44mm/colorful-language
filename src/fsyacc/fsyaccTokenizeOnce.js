import { matching } from "structural-comparison"
import { trySingleLineComment } from '../fsharp/trySingleLineComment'
import { tryBlockComment } from '../fslex/tryBlockComment'
import { trySymbol } from '../trySymbol'
import { tryWhitespace } from '../tryWhitespace'
import { tryWord } from '../tryWord'

import { tryIdentifier } from './tryIdentifier'
import { tryKeyword } from './tryKeyword'

export const fsyaccTokenizeOnce = matching([
    tryWhitespace,
    trySingleLineComment,
    tryBlockComment,
    tryKeyword,
    tryIdentifier,
    tryWord,
    trySymbol,
])

