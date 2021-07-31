import { tryToken } from '../tryToken'

export const tryTypeParameter = tryToken(/^'[\p{L}\p{Nl}_][\p{L}\p{M}\p{N}\p{Pc}\p{Cf}]*(?!')/u, 'identifier')

    //Like variable types, the names of type parameters always start with a single quote ( ' ) 
    //followed by an alphanumeric name for the type. Typically, just a single letter is used.


