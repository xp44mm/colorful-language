import { tryBang } from './tryBang'

test('tryBang', () => {
    let x = "let!"
    let y = tryBang(x)
    expect(y).toEqual({ token: { keyword: "let!" }, restInput: "" })
})
