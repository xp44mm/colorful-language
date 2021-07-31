import { takeInterpolatedSingleQuoteString } from './takeInterpolatedSingleQuoteString'

test('takeInterpolatedSingleQuoteString', () => {
    let x = '{{"'
    let y = takeInterpolatedSingleQuoteString([], '$"', x)
    //console.log(y)
    expect(y).toEqual({ tokens: [{ string: '$"{{"' }], restInput: '' })
})

test('takeInterpolatedSingleQuoteString with hole', () => {
    let x = '{{{box 2.5}"'
    let y = takeInterpolatedSingleQuoteString([], '$"', x)
    //console.log(y)
    expect(y).toEqual({
        tokens: [
            { string: '$"{{{' },
            { identifier: 'box' },
            ' ',
            '2',
            '.',
            '5',
            { string: '}"' }
        ],
        restInput: ''
    })
})

