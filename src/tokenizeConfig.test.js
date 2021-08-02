import { matching } from "structural-comparison"
import { tokenizeConfig } from './tokenizeConfig'
import { trySymbol } from "./trySymbol"
import { tryWhitespace } from "./tryWhitespace"
import { tryWord } from "./tryWord"

test('basis test', () => {
    //config
    let tokenizeOnce = matching([tryWord, tryWhitespace])
    let tokenize = tokenizeConfig(tokenizeOnce)

    //input
    let x = 'let '
    let y = tokenize(x)
    //assert
    expect(y).toEqual(['let', ' '])
})

test('simple test', () => {
    //config
    let tokenizeOnce = matching([tryWhitespace, tryWord, trySymbol])
    let tokenize = tokenizeConfig(tokenizeOnce)

    let x = 'let vol1 = Liter 2.5   '
    let y = tokenize(x)
    expect(y).toEqual(['let', ' ', 'vol1', ' ', '=', ' ', 'Liter', ' ', '2', '.', '5', '   '])
})
