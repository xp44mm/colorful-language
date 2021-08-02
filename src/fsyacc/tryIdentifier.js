import { tryToken } from '../tryToken'

export const tryIdentifier = tryToken(/^[\p{L}\p{Nl}_][\p{L}\p{M}\p{N}\p{Pc}\p{Cf}]*/u, 'identifier')
