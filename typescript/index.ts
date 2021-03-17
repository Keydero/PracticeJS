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

    console.log(num1 + num2)
}

combine(2, "2")
// function
// first arrow => presenting
// second => logic
const logNumber: (i: number) => void = (i: number) => { console.log("hello") }

