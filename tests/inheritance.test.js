const inherit = require('../inheritance');

test('Cat should shuffle around', () => {
    let kitten = new inherit.Cat;
    expect(kitten.makeNoise(10)).toBe('a disturbance') && expect(kitten.meow()).toBe('Meow.');
});