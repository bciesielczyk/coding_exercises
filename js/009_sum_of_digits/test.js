const solution = require('./index');

test('Given N = 14, the function should return 19', () => {
    expect(solution(14)).toEqual(19);
});

test('Given N = 10, the function should return 11', () => {
    expect(solution(10)).toEqual(11);
});

test('Given N = 99, the function should return 9999', () => {
    expect(solution(99)).toEqual(9999);
});
