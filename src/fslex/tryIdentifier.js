import { isKeyword } from "./isKeyword"

export const tryIdentifier = (input = "") => {
    let res = /^[\p{L}\p{Nl}_][\p{L}\p{M}\p{N}\p{Pc}\p{Cf}]*/u.exec(input)
    if (res && res.length > 0) {
        let identifier = res[0]
        let restInput = input.slice(identifier.length)
        if (isKeyword(identifier)) {
            return { token: { keyword: identifier }, restInput }
        } else {
            return { token: { identifier }, restInput }
        }
    } else {
        return null
    }
}

