import { tryDoubleTickIdentifier } from './tryDoubleTickIdentifier'

test('tryDoubleTickIdentifier', () => {
    let x = '``more? ``'
    let y = tryDoubleTickIdentifier(x)
    expect(y).toEqual({ token: { identifier: '``more? ``' }, restInput: '' })
})

