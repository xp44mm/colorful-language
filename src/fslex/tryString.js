import { tryToken } from '../tryToken'

export const tryString = tryToken(/^"(\\["\\]|[^"])*"/, 'string')


