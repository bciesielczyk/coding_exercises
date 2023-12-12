import { reverseString } from './index'

test('Reverse reverses a string', () => {
    expect(reverseString('abcd')).toEqual('dcba')
})