class Calculator {
    constructor() {
        this.currentValue = 0;
    }

    add(value) {
        this.currentValue += value;
        return this.currentValue;
    }

    subtract(value) {
        this.currentValue -= value;
        return this.currentValue;
    }

    multiply(value) {
        this.currentValue *= value;
        return this.currentValue;
    }

    divide(value) {
        if (value === 0) {
            throw new Error("Cannot divide by zero");
        }
        this.currentValue /= value;
        return this.currentValue;
    }

    clear() {
        this.currentValue = 0;
        return this.currentValue;
    }
}

// Example usage:
const calculator = new Calculator();
console.log(calculator.add(5));       // 5
console.log(calculator.subtract(2));  // 3
console.log(calculator.multiply(4));  // 12
console.log(calculator.divide(3));    // 4
console.log(calculator.clear());      // 0