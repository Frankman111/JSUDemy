// reference vs. value
// Primitive Data Types
// String, Number, Symbol, Boolean, Undefined, Null
// Arrays, Functions, Objects = object
//typeof

//When assigning primitive data types value to a variable any changes are made directly to the value, without affecting the original value

// when assigning non-primitive data type value to a variable os done by reference so any changes will affect all the references

const number = 1;
let number2 = number;
number2 = 7;
console.log(`the first value ist ${number}`);
console.log(`the second value ist ${number2}`);

let person = {
    name: "bob"
};

let person2 = person;
person2.name = "susy";

console.log(`The name of the first person is ${person.name}`);
console.log(`The name of the second person is ${person2.name}`);

