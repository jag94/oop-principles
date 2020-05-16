const Calculator = require('../encapsulation');

test('Calculator divide 2 by  2 to equal 1', () => {
    let Ctest = new Calculator();
    expect(Ctest.divide(2, 2)).toBe(1);
});

test('Calculator Add 2 by  2 to equal 4', () => {
    let Ctest = new Calculator();
    expect(Ctest.add(2, 2)).toBe(4);
});

test('Calculator Multiply 2 by  2 has a result equal to 4', () => {
    let Ctest = new Calculator();
    expect(Ctest.multiply(2, 2)).toBe(4);
});

test('Calculate subtract 6 and  2 to equal 4', () => {
    let Ctest = new Calculator();
    expect(Ctest.subtract(6, 2)).toBe(4);
});
