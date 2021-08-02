import { tryToken } from '../tryToken'

/// 字符常量
export const tryChar = tryToken(/^'(\\['"\\]|[^'])*'/, 'char')



