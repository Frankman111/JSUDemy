const numbers = [0, 1, 2, 3, 4];

//show all numbers 
/* for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
} */

//forEach - does not return a new array

const people = [
    {
        name: "bob",
        age: 20,
        position: "developer"
    },
    {
        name: "peter",
        age: 26,
        position: "designer"
    },
    {
        name: "susy",
        age: 42,
        position: "senior dev"
    }
]

function showPerson(person){
    console.log(person.position);
}

//people.forEach(showPerson)

people.forEach(function (item){
    console.log(item.position);
});