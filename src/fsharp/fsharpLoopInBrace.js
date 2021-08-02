import { fsharpTokenizeOnce } from './fsharpTokenizeOnce'

export const fsharpLoopInBrace = (outerLoop) => {
    function fsharpLoop(accTokens = [], depth, input) {
        if (input === "") {
            return accTokens
        } else {
            let { token, tokens, restInput } = fsharpTokenizeOnce(input)
            if (token) {
                if (token === "}") {
                    if (depth > 0) {
                        return () => fsharpLoop([...accTokens, token], depth - 1, restInput)
                    } else {
                        return () => outerLoop([...accTokens, token], restInput)
                    }
                } else if (token === "{") {
                    return () => fsharpLoop([...accTokens, token], depth + 1, restInput)
                } else {
                    return () => fsharpLoop([...accTokens, token], depth, restInput)
                }
            } else if (tokens) {
                return () => fsharpLoop([...accTokens, ...tokens], depth, restInput)
            }
        }
    }

    return fsharpLoop
}

