﻿import { trampoline } from "structural-comparison"
import { fsharpLoopInBrace } from "../fsharp/fsharpLoopInBrace"
import { fsharpTokenizeOnce } from '../fsharp/fsharpTokenizeOnce'
import { fsyaccTokenizeOnce } from './fsyaccTokenizeOnce'

function fsyaccLoop(accTokens = [], input) {
    if (input === "") {
        return accTokens
    } else {
        let { token, tokens, restInput } = fsyaccTokenizeOnce(input)
        if (token) {
            if (token === "{") {
                return () => fsharpLoop([...accTokens, token], 0, restInput)
            } else {
                return () => fsyaccLoop([...accTokens, token], restInput)
            }
        } else if (tokens) {
            return () => fsyaccLoop([...accTokens, ...tokens], restInput)
        }
    }
}

const fsharpLoop = fsharpLoopInBrace(fsyaccLoop)

const fsyaccIter = trampoline(fsyaccLoop)

export const fsyaccTokenize = (input) => fsyaccIter([], input)