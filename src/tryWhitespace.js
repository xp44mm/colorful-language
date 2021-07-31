import { tryToken } from './tryToken'

export const tryWhitespace = tryToken(/^\s+/, '#text')

