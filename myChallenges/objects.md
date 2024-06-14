Objects - key/value pairs
dot notation

const person = {
    name: "Frank",
    lastName: "Haider",
    age: 43,
    education: false,
    married: true,
    siblings: ["anna", "susan", "peter"],
    greeting: function(){
        console.log("Hello my Name is John");
    }
};

const age = person.age;
console.log(age);

console.log(person.name);
console.log(person.siblings[2]);
person.greeting();

