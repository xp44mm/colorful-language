import { tryTripleQuoteString } from './tryTripleQuoteString'

test('tryTripleQuoteString', () => {
    let x = '"""\n"""'
    let y = tryTripleQuoteString(x)
    expect(y).toEqual({ token: { string: '"""\n"""' }, restInput: "" })
})
