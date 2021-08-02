import { fsharpTokenizeOnce } from './fsharpTokenizeOnce'
import { tokenizeConfig } from '../tokenizeConfig'

export const fsharpTokenize = tokenizeConfig(fsharpTokenizeOnce)
