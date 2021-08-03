import { tryToken } from '../tryToken'

export const tryBlockComment = tryToken(/^\(\*(\(\*\)|[\s\S])*?\*\)/, 'comment')
