// map
// does return a new array
// does not change the size of the original array
//uses values from the original array when making a new one

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

const ages = people.map(function(person){
    console.log(person);
    return "Hello World"
});
console.log(ages);