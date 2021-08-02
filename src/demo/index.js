import { button, div, option, pre, select, textarea, textNode } from 'hyperscript-rxjs'
import "../../css/colors/pre.less"
import { fsharpTokenize } from '../fsharp/fsharpTokenize'
import { fslexTokenize } from '../fslex/fslexTokenize'
import { fsyaccTokenize } from '../fsyacc/fsyaccTokenize'

import { render } from '../render'

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
                let tokens = (() => {
                    if (type.value === 'F#') {
                        return fsharpTokenize(inp.value)
                    } else if (type.value === 'fsl') {
                        return fslexTokenize(inp.value)
                    } else if (type.value === 'fsy') {
                        return fsyaccTokenize(inp.value)
                    }
                })("tokens")

                console.log(tokens)
                render(outp, tokens)
            }),
        ),
        outp,
    ])


}

