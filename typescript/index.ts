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