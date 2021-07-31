import { trySymbol } from "./trySymbol"

test("trySymbol test", () => {
    let x = "xxx"
    let y = trySymbol(x)
    expect(y).toEqual({ token: "x" , restInput: "xx" })
})
