import "../../css/colors/pre.less"

export function render(root, vmodels = []) {

    while (root.hasChildNodes()) {
        root.removeChild(root.lastChild)
    }

    vmodels.map(e => renderToken(e))
        .forEach(e => {
            root.appendChild(e)
        })

    root.normalize()

    return root
}

function renderToken(vmodel) {
    let textNode = document.createTextNode(vmodel.text)

    if (vmodel.nodeName === "#text") {
        return textNode
    } else {
        let root = document.createElement(vmodel.nodeName)
        root.className = vmodel.className
        root.appendChild(textNode)
        return root
    }
}