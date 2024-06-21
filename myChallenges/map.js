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
    return person.age + 20;
});

const newPeople = people.map(function(person){
    return {
        firstName: person.name.toUpperCase(),
        oldAge: person.age + 20
    };
});

const names = people.map(function (person) {
    return `<h1>${person.name}</h1>`
    
})

document.body.innerHTML = names.join("")

console.log(names);
