import { tryInterpolatedTripleQuoteString } from './tryInterpolatedTripleQuoteString'

test('tryInterpolatedTripleQuoteString', () => {
    let x = '$"""Name: {"Phillip"}, Age: %d{age}"""'
    let y = tryInterpolatedTripleQuoteString(x)
    //console.log(y)
    expect(y).toEqual({
        tokens: [
            { string: '$"""Name: {' },
            { string: '"Phillip"' },
            { string: '}, Age: %d{' },
            { identifier: 'age' },
            { string: '}"""' }
        ],
        restInput: ''
    })
})

test('tryInterpolatedTripleQuoteString', () => {
    let x = '$"""|{"Left",-7}|{"Right",7}|"""'
    let y = tryInterpolatedTripleQuoteString(x)
    //console.log(y)
    expect(y).toEqual({
        tokens: [
            { string: '$"""|{' },
            { string: '"Left"' },
            ',', '-', '7',
            { string: '}|{' },
            { string: '"Right"' },
            ',', '7',
            { string: '}|"""' }
        ],
        restInput: ''
    })
})
