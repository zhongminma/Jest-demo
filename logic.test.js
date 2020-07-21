import { price1, price2 } from './logic.js';


test('check price1 - 400', () => {
    expect(price1(400)).toBe('good')
})

test('check price2 - 900', () => {
    expect(price2(900)).toBe('VIP')
})

