var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Your code goes here");
var add = function (num1, num2) { return num1 + num2; };
console.log(add(1, 2));
var person = {
    name: "Abdenour",
    age: 12,
    hobbies: ["Planes", "Games", "Trolling"],
    role: [52, "DevOps"]
};
console.log(person.name);
person.hobbies.map(function (hobby) { return console.log(hobby); });
function combine(num1, num2) {
}
combine(2, "2");
// function
// first arrow => presenting
// second => logic
var logNumber = function (i) { console.log("hello"); };
// reverse numbers
var numbers = "3298984342";
var reversed = "";
var numbersLength = numbers.length;
for (var i = 1; i < numbers.length; i++) {
    console.log("i", numbers[i]);
    reversed += numbers[numbersLength - i];
}
console.log(reversed);
// factorial
function factorial(num) {
    return num == 1 ? 1 : num * +factorial(num - 1);
}
console.log("factorial", factorial(4));
// Helper Method Recursion
function collectOddValues(array) {
    var result = [];
    function helper(helperInput) {
        // logic to find odd numbers
        result.push(helperInput);
    }
    helper(array);
    return result;
}
collectOddValues([1, 2, 3, 4, 5]);
// pure recursion
function collectOddValues2(input) {
    var result = [];
    if (input.length == 0) {
        return result;
    }
    if (input[0] % 2 !== 0) {
        result.push(input[0]);
    }
    result = result.concat(collectOddValues(input.slice(1)));
    return result;
}
console.log(collectOddValues2([1, 2, 3, 4, 5]));
// Linear pseudo code
function linearSearch(items, value) {
    for (var i = 0; i < items.length; i++) {
        if (items[i] == value)
            return i;
    }
    return -1;
}
console.log(linearSearch(["jhon", "dave", "chris", "robben"], "dave"));
// Binary Search
// Refactored Version
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle])
            end = middle - 1;
        else
            start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 103));
//class
var Vehicule = /** @class */ (function () {
    // instantly executed when we create an instance
    function Vehicule(color, windows) {
        this.windows = windows;
        this.color = color;
    }
    Vehicule.prototype.honk = function () {
        return "Beep Beep";
    };
    return Vehicule;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.beep = function () {
        return this.honk();
    };
    return Car;
}(Vehicule));
var bmw = new Car("magenta", 4);
console.log("bmw", bmw);
