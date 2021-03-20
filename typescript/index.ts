console.log("Your code goes here")

let add = (num1: number, num2: number): number => num1 + num2

console.log(add(1, 2))



let person: {
    name: string;
    age: number;
    hobbies: string[]
    role: [number, string]
} = {
    name: "Abdenour",
    age: 12,
    hobbies: ["Planes", "Games", "Trolling"],
    role: [52, "DevOps"]
}

console.log(person.name)

person.hobbies.map((hobby) => console.log(hobby))

function combine(num1: string | number, num2: number | string) {


}

combine(2, "2")
// function
// first arrow => presenting
// second => logic
const logNumber: (i: number) => void = (i: number) => { console.log("hello") }

// reverse numbers
let numbers = "3298984342"
let reversed = ""
let numbersLength = numbers.length

for (let i = 1; i < numbers.length; i++) {
    console.log("i", numbers[i])
    reversed += numbers[numbersLength - i]
}
console.log(reversed)

// factorial


function factorial(num: number): number {
    return num == 1 ? 1 : num * +factorial(num - 1)
}

console.log("factorial", factorial(4))

// Helper Method Recursion

function collectOddValues(array: number[]): number[] {

    let result: number[] = []
    function helper(helperInput) {
        // logic to find odd numbers
        result.push(helperInput)
    }
    helper(array)
    return result;
}


collectOddValues([1, 2, 3, 4, 5])

// pure recursion

function collectOddValues2(input) {
    let result = []
    if (input.length == 0) {
        return result
    }
    if (input[0] % 2 !== 0) {
        result.push(input[0])
    }
    result = result.concat(collectOddValues(input.slice(1)))
    return result
}


console.log(collectOddValues2([1, 2, 3, 4, 5]))


// Linear pseudo code

function linearSearch(items: string[], value: string) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] == value) return i
    }
    return -1
}
console.log(linearSearch(["jhon", "dave", "chris", "robben"], "dave"))

// Binary Search


// Refactored Version
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 103))


//class

class Vehicule {
    color: string;
    // instantly executed when we create an instance
    constructor(color, public windows: number) {
        this.color = color;
    }
    protected honk(): string {
        return "Beep Beep"
    }
}
class Car extends Vehicule {
    constructor(color: string, windows: number, public wheels: number) {
        super(color, windows)
    }
    beep() {
        return this.honk()
    }
}

let bmw = new Car("magenta", 4, 4)

console.log("bmw", bmw)