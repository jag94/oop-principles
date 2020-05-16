const poly = require('../polymorphism');

test('items are all objects', () => {
    let round = new poly.Circle(7.58);
    let box = new poly.Rectangle(2, 3);
    expect(round.area()).toBe(180.50460414171658) && expect(box.area()).toBe(6);
});