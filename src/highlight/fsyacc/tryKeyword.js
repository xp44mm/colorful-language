import { tryToken } from '../tryToken'

export const tryKeyword = tryToken(/^%(%|\w+)/, 'keyword')


