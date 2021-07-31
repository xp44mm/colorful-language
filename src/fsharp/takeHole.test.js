import { takeHole } from './takeHole'

const takeInterpolatedStringInternal = (tokens, prefix, input) => {
    return { tokens: [...tokens, { token: prefix + input }] }
}

test('takeHole', () => {
    let x = "x123_'} "
    let y = takeHole(takeInterpolatedStringInternal, x)
    expect(y).toEqual({ tokens: [{ identifier: "x123_'" }, { token: '} ' }] })
})

test('takeHole many tokens', () => {
    let x = 'if true then 0 else 1}'
    let y = takeHole(takeInterpolatedStringInternal, x)
    //console.log(y)
    expect(y).toEqual({
        tokens: [
            { keyword: 'if' },
            ' ',
            { keyword: 'true' },
            ' ',
            { keyword: 'then' },
            ' ',
            '0',
            ' ',
            { keyword: 'else' },
            ' ',
            '1',
            { token: '}' }
        ]
    })
})

//test('tryIdentifier unicode', () => {
//    let x = '标识符'
//    let y = tryIdentifier(x)
//    expect(y).toEqual({ token: { identifier: '标识符' }, restInput: '' })
//})
