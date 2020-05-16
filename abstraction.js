const Calculator = require('./encapsulation');

let abstract = new Calculator();
a = 4;
b = 2;

//When run, this code calls upon the public methods from calculate class from the encapsulation file and uses them to change
//the values of the private variables. It then receives the results of the methods without ever having to interact directly
//with the exact code of the object Calculator.
sum = abstract.add(a, b);
product = abstract.multiply(a, b);
quotient = abstract.divide(a, b);
difference = abstract.subtract(a, b);

console.log("The sum is: " + sum);
console.log("The difference is: " + difference);
console.log("The product is: " + product);
console.log("The quotient is: " + quotient);