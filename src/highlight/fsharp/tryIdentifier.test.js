import { tryIdentifier } from './tryIdentifier'

test('tryIdentifier', () => {
    let x = "x123_'"
    let y = tryIdentifier(x)
    expect(y).toEqual({ token: { identifier: "x123_'" }, restInput: '' })
})

test('try keyword', () => {
    let x = 'let'
    let y = tryIdentifier(x)
    expect(y).toEqual({ token: { keyword: 'let' }, restInput: '' })
})

test('tryIdentifier unicode', () => {
    let x = '标识符'
    let y = tryIdentifier(x)
    expect(y).toEqual({ token: { identifier: '标识符' }, restInput: '' })
})
