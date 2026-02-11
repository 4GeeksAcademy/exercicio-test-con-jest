const { sum } = require('./app.js');
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
expect(total).toBe(23);
});    


test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})


test("Conversion from USD to JPY", function() {
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(10)).toBe(1462.6168224299065);
})

test("Conversion from JPY to GBP", function() {
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(1300)).toBe(7.226837060702875);
})
