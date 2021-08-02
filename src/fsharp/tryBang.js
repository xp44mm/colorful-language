import { matching } from 'structural-comparison'

const rgxBangs = [
    /^do!/,
    /^yield!/,
    /^return!/,
    /^match!/,
    /^and!/,
    /^let!/,
]

const eachBang = (pattern = /^/) => (input = "") => {
    let res = pattern.exec(input)
    if (res && res.length > 0) {
        let keyword = res[0]
        let restInput = input.slice(keyword.length)
        return { token: { keyword }, restInput }
    } else {
        return null
    }
}

const tokenizers = rgxBangs.map(pattern => eachBang(pattern))

export const tryBang = matching(tokenizers)
