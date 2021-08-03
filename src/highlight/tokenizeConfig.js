import { trampoline } from "structural-comparison"

export function tokenizeConfig(tokenizeOnce) {
    function loop(accTokens = [], input) {
        if (input === "") {
            return accTokens
        } else {
            let { token, tokens, restInput } = tokenizeOnce(input)
            if (token) {
                return () => loop([...accTokens, token], restInput)
            } else if (tokens) {
                return () => loop([...accTokens, ...tokens], restInput)
            }
        }
    }
    const iterate = trampoline(loop)
    return input => iterate([], input)
}

