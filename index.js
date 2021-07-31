import './index.css'

import { fragment } from 'hyperscript-rxjs'
import { demo } from './src/demo'
let elem = demo()

document.addEventListener('DOMContentLoaded', function () {
    const root = document.getElementById('root')
    let element = elem instanceof Array ? fragment(...elem) : elem
    root.appendChild(element)
})

