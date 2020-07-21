const { TestScheduler } = require("jest");
test('test matchers with Jest', () => {
    const a = {number: '100'}
    expect(a).toEqual({number:'100'});
})

test('test matchers with Jest', () => {
    expect(100).toEqual(100);
    const a = null;
    expect(a).toBeNull();
})

test('test array match', () => {
    const arr = ['app', 'cobra', 'bob'];
    expect(arr).toContain('app')
})
test('test array match', () => {
    const arr = ['app', 'cobra', 'bob', 'app'];
    const data = new Set(arr);
    expect(data).toContain('app')
})

const throwFun = () => {
    throw new Error('error happend')
}
test('test toThrow', () => {
    expect(throwFun).toThrow();
})


