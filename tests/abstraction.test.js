const abs = require('../abstraction');

test('a creature will return info', () => {
    expect(abs(26, 30)).toBe('Height: 26, Weight: 30');
});