import { button, div, textarea, textNode, pre } from 'hyperscript-rxjs'
import { fsharpTokenize } from '../fsharp/fsharpTokenize'
import { render } from './render'

export function demo() {
    let inp = textarea({
        placeholder: "input",
        rows: 7,
    })

    let outp = pre()

    return div([
        inp,
        button({
            className: "btn-primary",
        }, [
            textNode("ok"),
        ]).subscribeEvent('click', e => {
            let tokens = fsharpTokenize(inp.value)
            console.log(tokens)
            let vmodels =
                tokens.map(tok => {
                    if (typeof tok === "string") {
                        return { text: tok, nodeName: '#text' }
                    } else {
                        let [className, text] = Object.entries(tok)[0]
                        return { className, text, nodeName: 'CODE', }
                    }
                })
            render(outp, vmodels)
        }),
        outp,
    ])


}

