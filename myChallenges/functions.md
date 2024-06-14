functions
deklarieren - declare the function
function hello(){
    //logic

}

hello(); -> ruft die Funktion auf invoke the function

------------------------Parameters and Arguments----------------------------------

function hello(name){
    console.log(`Hello ${name}`);
}

hello("Bob");
hello("Anna");
hello("Susy");

-----------------------------functions return-------------------------------------
const wallHeight = 80;


function calculate(value){
    //const newValue = value * 2.54;
    return value * 2.54;
}

const width = calculate(100);
const height = calculate(wallHeight);

const dimensions =[width, height];
console.log(dimensions);


-----------------------------functions Expressions-------------------------------------

create a variable, assign to FUNCTION (not value), use var
diff - hoisting, use - arrow functions, libraries


// function definition / declaration
function addValues(num1, num2){
    return num1 + num2;
}

const firstValue = addValues(3,4);
const secondValue = addValues(12, 34);

//function Expressions
const add = function (num1, num2){
    return num1 + num2;
}

//const thirdValue = add(5, 6);

const values = [firstValue, secondValue, add(5,6)];
console.log(values);

// arrow function

const multiply = (num1, num2) => num1 * num2;