import { tryToken } from '../tryToken'

export const trySingleQuoteString = tryToken(/^"(\\[\\'"]|[^"])*"(B\b)?/i, 'string')


