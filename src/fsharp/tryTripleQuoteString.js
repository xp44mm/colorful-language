import { tryToken } from '../tryToken'

export const tryTripleQuoteString = tryToken(/^"""[\s\S]*?"""(B\b)?/i, 'string')



