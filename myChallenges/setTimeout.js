/*
setTimeout - runs function once after specific time

- pass function reference
- duration in ms (1000ms == 1s)
- default 0, more in async / await
- returns unique identifier
- clearTimeout to cancel
- on window object
*/

function sayHello(){
    console.log("Hallo Frank");
}

//setTimeout(sayHello, 1000); // do not invoke the function


//alternative approach ES6 -> func

// setTimeout(function(){
//     console.log("Hallo Welt");
// },2000);

function showScore(name, score){
    console.log(`hello ${name}, your score is ${score}`);   
};

// setTimeout(showScore, 1000, "frank", 34);

const firstID = setTimeout(showScore, 1000, "frank", 34);
const secondID = setTimeout(showScore, 1000, "sepp", 62);

console.log(firstID);
console.log(secondID);

clearTimeout(firstID);