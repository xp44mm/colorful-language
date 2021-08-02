import { tryToken } from '../tryToken'

export const tryAsterisk = tryToken(/^\(\*\)/, '#text')