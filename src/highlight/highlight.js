import "../../css/colors/pre.less"
import { fsharpTokenize } from './fsharp/fsharpTokenize'
import { fslexTokenize } from './fslex/fslexTokenize'
import { fsyaccTokenize } from './fsyacc/fsyaccTokenize'
import { render } from './render'

export function highlight(pre, lang, code) {
    let tokens = (() => {
        if (lang === 'F#') {
            return fsharpTokenize(code)
        } else if (lang === 'fsl') {
            return fslexTokenize(code)
        } else if (lang === 'fsy') {
            return fsyaccTokenize(code)
        }
    })("tokens")
    return render(pre, tokens)
}

