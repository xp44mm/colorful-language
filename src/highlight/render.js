import {renderToken} from './renderToken'

export function render(root, tokens = []) {
    while (root.hasChildNodes()) {
        root.removeChild(root.lastChild)
    }

    tokens.map(e => renderToken(e))
        .forEach(e => {
            root.appendChild(e)
        })

    root.normalize()

    return root
}

