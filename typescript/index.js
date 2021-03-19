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
