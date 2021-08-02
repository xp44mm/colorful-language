export function renderToken(token) {
    let model = (() => {
        if (typeof token === "string") {
            return { text: token, nodeName: '#text' }
        } else {
            let [className, text] = Object.entries(token)[0]
            return { className, text, nodeName: 'CODE' }
        }
    })()
    let textNode = document.createTextNode(model.text)
    if (model.nodeName === "#text") {
        return textNode
    } else {
        let root = document.createElement(model.nodeName)
        root.className = model.className
        root.appendChild(textNode)
        return root
    }
}