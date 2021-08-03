import { trySingleQuoteString } from './trySingleQuoteString'

test('trySingleQuoteString', () => {
    let x = '"\\\\\\""'
    let y = trySingleQuoteString(x)
    expect(y).toEqual({ token: { string: '"\\\\\\""' }, restInput: "" })
})

        