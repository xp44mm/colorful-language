import { tryChar } from './tryChar'

test('tryChar 1s', () => {
    let x = "'\\''"
    let y = tryChar(x)
    expect(y).toEqual({ token: { char: "'\\''" }, restInput: "" })
})

test('tryChar 3d', () => {
    let x = "'\\001'"
    let y = tryChar(x)
    expect(y).toEqual({ token: { char: "'\\001'" }, restInput: "" })
})

test('tryChar 2x', () => {
    let x = "'\\x0F'"
    let y = tryChar(x)
    expect(y).toEqual({ token: { char: "'\\x0F'" }, restInput: "" })
})

test('tryChar 4u', () => {
    let x = "'\\uCC0F'"
    let y = tryChar(x)
    expect(y).toEqual({ token: { char: "'\\uCC0F'" }, restInput: "" })
})

test('tryChar 8U', () => {
    let x = "'\\U0000CC0F'"
    let y = tryChar(x)
    expect(y).toEqual({ token: { char: "'\\U0000CC0F'" }, restInput: "" })
})
