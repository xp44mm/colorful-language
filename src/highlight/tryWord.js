import { tryToken } from './tryToken'

export const tryWord = tryToken(/^[\p{L}\p{M}\p{N}\p{Pc}\p{Cf}]+/u, '#text')



//export const tryWord = (input = "") => {
//    let res = /^[\p{L}\p{M}\p{N}\p{Pc}\p{Cf}]+/u.exec(input)
//    if (res && res.length > 0) {
//        let token = res[0]
//        let restInput = input.slice(token.length)
//        return { token, restInput }
//    } else {
//        return null
//    }
//}

