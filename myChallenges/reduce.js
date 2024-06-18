/* reduce 
iterates, callback function
reduces to a single value - number, array, object
1 parameter ("acc") - total of all calcluations
2 parameter ("curr") - current iteration / value */

const people = [
    {
        name: "bob",
        age: 20,
        position: "developer",
        id: 1,
        salary: 200
    },
    {
        name: "peter",
        age: 25,
        position: "designer",
        id: 2,
        salary: 300
    },
    {
        name: "susy",
        age: 30,
        position: "senior dev",
        id: 3,
        salary: 400
    },
    {
        name: "anna",
        age: 35,
        position: "CEO",
        id: 4,
        salary: 500
    }
]

const total = people.reduce(function(acc, curr){
    console.log(`total ${acc}`);
    console.log(`currMoney ${curr.salary}`);

    acc += curr.salary

    return acc
},0);

console.log(total);