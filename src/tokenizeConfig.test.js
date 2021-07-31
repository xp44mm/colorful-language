import { tokenizeConfig } from './tokenizeConfig'
import { trySymbol } from "./trySymbol"
import { tryWhitespace } from "./tryWhitespace"
import { tryWord } from "./tryWord"

test('basis test', () => {
    let x = 'let '
    let y = tokenizeConfig([tryWord, tryWhitespace])(x)
    expect(y).toEqual(['let', ' '])
})

test('simple test', () => {
    let x = 'let vol1 = Liter 2.5   '
    let y = tokenizeConfig([tryWhitespace, tryWord, trySymbol])(x)
    expect(y).toEqual(['let', ' ', 'vol1', ' ', '=', ' ', 'Liter', ' ', '2', '.', '5', '   '])
})
