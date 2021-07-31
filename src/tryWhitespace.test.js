import { tryWhitespace } from "./tryWhitespace"

test("whitespace test", () => {
    let x = "  "
    let y = tryWhitespace(x)
    expect(y).toEqual({ token: "  ", restInput: "" })
})

test("lf test", () => {
    let x = "\r\nxxx"
    let y = tryWhitespace(x)
    expect(y).toEqual({ token: "\r\n", restInput: "xxx" })
})

