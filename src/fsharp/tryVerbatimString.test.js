
import { tryVerbatimString } from './tryVerbatimString'

test('tryVerbatimString', () => {
    let x = '@""""'
    let y = tryVerbatimString(x)
    expect(y).toEqual({ token: { string: '@""""' }, restInput: "" })
})

        