import { tryToken } from '../tryToken'

export const trySingleLineComment = tryToken(/^\/\/+.*/, 'comment')

