import { trySingleLineComment } from './trySingleLineComment'

test('trySingleLineComment', () => {
    let x = "// this is a single-line comment  \n"
    let y = trySingleLineComment(x)
    expect(y).toEqual({ token: { comment: "// this is a single-line comment  " }, restInput: "\n" })
})

