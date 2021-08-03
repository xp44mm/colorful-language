import { tryWord } from "./tryWord"

test("whitespace test", () => {
    let x = "xyze'"
    let y = tryWord(x)
    expect(y).toEqual({ token: "xyze", restInput: "'" })
})

test("标识符 test", () => {
    let x = "标识符"
    let y = tryWord(x)
    expect(y).toEqual({ token: "标识符", restInput: "" })
})

