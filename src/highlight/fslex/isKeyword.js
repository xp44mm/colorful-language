const rgxKeywords = [
    /^let$/,
    /^and$/,
    /^rule$/,
    /^parse$/,
]

export const isKeyword = (input = "") => {
    return rgxKeywords.some(rgx => rgx.test(input))
}
