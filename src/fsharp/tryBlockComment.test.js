import { tryBlockComment } from './tryBlockComment'

test('tryBlockComment', () => {
    let x = "(* this  \nis a comment  \n*)  "
    let y = tryBlockComment(x)
    expect(y).toEqual({ token: { comment: "(* this  \nis a comment  \n*)" }, restInput: "  " })
})


test('tryBlockComment Asterisk', () => {
    let x = "(* (*) *)"
    let y = tryBlockComment(x)
    expect(y).toEqual({ token: { comment: "(* (*) *)" }, restInput: "" })
})
