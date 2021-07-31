import { tryTypeParameter } from './tryTypeParameter'

test('tryTypeParameter', () => {
    let x = "'t"
    let y = tryTypeParameter(x)
    expect(y).toEqual({ token: { identifier: "'t" }, restInput: '' })
})

