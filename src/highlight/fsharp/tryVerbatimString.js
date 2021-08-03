import { tryToken } from '../tryToken'

export const tryVerbatimString = tryToken(/^@"(""|[^"])*"(B\b)?/i, 'string')

