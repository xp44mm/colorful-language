import { button, div, option, pre, select, textarea, textNode } from 'hyperscript-rxjs'
import "../../css/colors/pre.less"

import { highlight } from '../highlight'

export function demo() {
    let inp = textarea({
        placeholder: "input",
        rows: 7,
    })

    let type = select({ value: 'F#' }, ['F#', 'fsl', 'fsy'].map(text => option({ text })))
    let outp = pre()

    return div([
        inp,
        div(
            type,
            button({
                className: "btn-primary",
            }, [
                textNode("highlight"),
            ]).subscribeEvent('click', e => {
                console.warn('Do not click repeatedly!')
                highlight(outp, type.value, inp.value)

                //let tokens = (() => {
                //    if (type.value === 'F#') {
                //        return fsharpTokenize(inp.value)
                //    } else if (type.value === 'fsl') {
                //        return fslexTokenize(inp.value)
                //    } else if (type.value === 'fsy') {
                //        return fsyaccTokenize(inp.value)
                //    }
                //})("tokens")
                //console.log(tokens)
                //render(outp, tokens)
            }),
        ),
        outp,
    ])


}

