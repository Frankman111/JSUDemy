//Arrays and for loop

const names = ["anna", "susy", "bobo", "john"];
const lastName = "shakeandbake";
let newArray = [];

for(let i=0; i < names.length; i++){ //1 <= names.length -1 works also
    const fullName  = `${names[i]} ${lastName}`;
    newArray.push(fullName)

}

console.log(newArray);