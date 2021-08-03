import { isKeyword } from './isKeyword'

test('basis test', () => {
    let x = 'let'
    let y = isKeyword(x)
    expect(y).toEqual(true)
})

test('false test', () => {
    let x = 'returnValue'
    let y = isKeyword(x)
    expect(y).toEqual(false)
})

