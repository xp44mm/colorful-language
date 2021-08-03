import { trampoline } from "structural-comparison"
import { fsharpLoopInBrace } from "../fsharp/fsharpLoopInBrace"
import { fsharpTokenizeOnce } from '../fsharp/fsharpTokenizeOnce'
import { fslexTokenizeOnce } from './fslexTokenizeOnce'

function fslexLoop(accTokens = [], input) {
    if (input === "") {
        return accTokens
    } else {
        let { token, tokens, restInput } = fslexTokenizeOnce(input)
        if (token) {
            if (token === "{") {
                return () => fsharpLoop([...accTokens, token], 0, restInput)
            } else {
                return () => fslexLoop([...accTokens, token], restInput)
            }
        } else if (tokens) {
            return () => fslexLoop([...accTokens, ...tokens], restInput)
        }
    }
}

const fsharpLoop = fsharpLoopInBrace(fslexLoop)

const fslexIter = trampoline(fslexLoop)

export const fslexTokenize = (input) => fslexIter([], input)
