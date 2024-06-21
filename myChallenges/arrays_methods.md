// Arrays properties and methods

let names = ["john", "bobo", "barry", "olga", "ben"];

//length
console.log(names.length);
console.log(names[names.length -1]); --> equals always the last index

// concat
const lastNames = ["pepper", "onion", "banana"];
const allNames = names.concat(lastNames);
console.log(allNames);

//reverse
console.log(allNames.reverse()):

//unshift -> add to the first index
allNames.unshift("susy");

//shift -> clears the first index
allNames.shift(); 

//push -> added to the end of the array
allNames.push("susy");

//pop -> clears the last index of teh array
allNames.pop();

//splice - mutates the orig. array
const specificNames = allNames.splice(2,1); grabs 1 item with index 2 and puts it into the array, but deletes it from the original
console.log(specificNames);
