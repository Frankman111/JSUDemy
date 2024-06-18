/* find 
returns single instance (in this case object)
returns first match, if no match -> undefined
great for getting unique value */

const people = [
    {
        name: "bob",
        age: 20,
        position: "developer",
        id: 1
    },
    {
        name: "peter",
        age: 25,
        position: "designer",
        id: 2
    },
    {
        name: "susy",
        age: 30,
        position: "senior dev",
        id: 3
    },
    {
        name: "anna",
        age: 35,
        position: "CEO",
        id: 4
    }
]


const names = ["bob", "peter", "susy"];
console.log(names.find(function(name){
    return name === "bob"
})
);

const person = people.find(function(person){
    return person.id === 3;
});
console.log(person.name);


// example with filter - returns an array
const person2 = people.filter(function(person){
    return person.id === 3;
});
console.log(person2[0].name); //to access the name