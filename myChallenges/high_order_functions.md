// Callback Functions, High Order Functions, Functions as First Class Objects / Citizen
//Functions are first class objects _ stored in a variable(expression), passed as an argument to another function, return from the function (closure)

//High Order Functions - accepts another function as an argument or returns another functions as a result

//Callback Function - passed to another function as an argument and executed inside that function

function greetMorning(name){
    const myName = "John";
    console.log(`Good Morning ${name}, my name is ${myName}`);
}

greetMorning("bobo");