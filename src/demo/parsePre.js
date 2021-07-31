export function parsePre() {
    let htmlText =
        '<pre><code class="nb">parseInt</code><code class="p">(</code><code class="nx">string</code> <code class="o">:</code> <code class="nx">string</code><code class="p">,</code> <code class="nx">radix</code><code class="o">?</code> <code class="o">:</code> <code class="nx">number</code><code class="p">)</code> <code class="o">:</code> <code class="nx">number</code></pre>'
    let root = document.createElement('div')
    root.innerHTML = htmlText
    root.normalize()

    let tokens = [...root.firstChild.childNodes].map(nd => {
        let ret = { nodeName: nd.nodeName }
        if (nd.nodeType === document.ELEMENT_NODE && nd.nodeName === 'CODE') {
            return { className: nd.className, text: nd.firstChild.nodeValue, ...ret }
        } else {
            return { text: nd.nodeValue, ...ret }
        }
    })

    console.log(tokens)

    return root
}

