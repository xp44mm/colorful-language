import { button, div, option, pre, select, textarea, textNode } from 'hyperscript-rxjs'
import { highlight } from 'lex-highlight'
import "../css/colors/pre.less"

export function demo() {
    let code = textarea({
        placeholder: "input",
        rows: 7,
    })

    let lang = select({ value: 'F#' }, ['F#', 'fsl', 'fsy','yacc'].map(text => option({ text })))
    let output = pre()

    return div([
        code,
        div(
            lang,
            button({
                className: "btn-primary",
            }, [
                textNode("highlight"),
            ]).subscribeEvent('click', e => {
                console.warn('Do not click repeatedly!')
                highlight(output, lang.value, code.value)
            }),
        ),
        output,
    ])


}

