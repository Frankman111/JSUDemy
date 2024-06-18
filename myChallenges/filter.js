/* filter 
does return a new Array
can manipulate the size of the new Arrayr
returns based in condition */

const people = [
    {
        name: "bob",
        age: 20,
        position: "developer"
    },
    {
        name: "peter",
        age: 25,
        position: "designer"
    },
    {
        name: "susy",
        age: 30,
        position: "senior dev"
    },
    {
        name: "anna",
        age: 35,
        position: "CEO"
    }
]


const youngPeople = people.filter(function(person){
    return person.age <= 25;
});

const developers = people.filter(function(person){
    return person.position === "developer";
});

console.log(developers);