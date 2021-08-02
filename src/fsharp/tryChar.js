import { tryToken } from '../tryToken'

/// 字符常量
export const tryChar = tryToken(/^'(\\(['"\\a-z]|\d{3}|x\w{2}|u\w{4}|U\w{8})|[^'\\])'/, 'char')



