import { tryInterpolatedSingleQuoteString } from './tryInterpolatedSingleQuoteString'

test('tryInterpolatedSingleQuoteString', () => {
    let x = '$"Name: {name}, Age: {age}"'
    let y = tryInterpolatedSingleQuoteString(x)
    //console.log(y)
    expect(y).toEqual({
        tokens: [
            { string: '$"Name: {' },
            { identifier: 'name' },
            { string: '}, Age: {' },
            { identifier: 'age' },
            { string: '}"' }
        ],
        restInput: ''
    })
})

test('tryInterpolatedSingleQuoteString whith expr', () => {
    let x = '$"I think {3.0 + 0.14} is close to {System.Math.PI}!"'
    let y = tryInterpolatedSingleQuoteString(x)
    //console.log(y)
    expect(y).toEqual({
        tokens: [
            { string: '$"I think {' },
            '3', '.', '0', ' ', '+', ' ', '0', '.', '14',
            { string: '} is close to {' },
            { identifier: 'System' },
            '.',
            { identifier: 'Math' },
            '.',
            { identifier: 'PI' },
            { string: '}!"' }
        ],
        restInput: ''
    })
})


test('tryInterpolatedSingleQuoteString whith escape', () => {
    let x = '$"A pair of braces: {{}}"'
    let y = tryInterpolatedSingleQuoteString(x)
    //console.log(y)
    expect(y).toEqual({ tokens: [{ string: '$"A pair of braces: {{}}"' }], restInput: '' })
})


test('tryInterpolatedSingleQuoteString whith FormattableString', () => {
    let x = '$"The speed of light is {speedOfLight:N3} km/s."'
    let y = tryInterpolatedSingleQuoteString(x)
    //console.log(y)
    expect(y).toEqual({
        tokens: [
            { string: '$"The speed of light is {' },
            { identifier: 'speedOfLight' },
            ':',
            { identifier: 'N3' },
            { string: '} km/s."' }
        ],
        restInput: ''
    })
})
