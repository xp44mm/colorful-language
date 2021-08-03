import { tryToken } from '../tryToken'

export const tryDoubleTickIdentifier = tryToken(/^``[ \S]+?``/, 'identifier')

    //If the rules governing identifier names are too restrictive, 
    //you can use double tick marks ( `` ) to quote the identifier name. 
    //This allows you to use any sequence of characters — 
    //as long as it doesn’t include tabs, newlines, or double ticks — as an identifier name. 


