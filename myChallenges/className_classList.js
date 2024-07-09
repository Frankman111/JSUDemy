// className
// classList

const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");

//const classValue = first.className;
//console.log(classValue);


second.className = "colors";
second.className = "text"; // overwrites the first className

second.className = "colors text"; // all classes are active

third.classList.add("colors", "text"); // allows to add the classes upon another line
//third.classList.remove("text");

let result = third.classList.contains("colors");
if(result){
    console.log("is active");
}else{
    console.log("is not active");
}

const classValue = third.classList;
console.log(classValue);