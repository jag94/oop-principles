class Calculator {

    constructor() {
        //These are variables. They are not directly altered by other methods.
        let a = 12;
        let b = "private";
    }

    //these are public functions that affect the value of class variables a and b.

    add(x, y) {
        this.a = x;
        this.b = y;
        return this.a + this.b;
    }

    multiply(x, y) {
        this.a = x;
        this.b = y;
        return this.a * this.b;
    }

    divide(x, y) {
        this.a = x;
        this.b = y;
        return this.a / this.b;
    }

    subtract(x, y) {
        this.a = x;
        this.b = y;
        return this.a - this.b;
    }
}

module.exports = Calculator;