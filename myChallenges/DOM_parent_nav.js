// parent Element

const heading = document.querySelector("h2");
//console.log(heading.parentElement.parentElement.parentElement); // chaining the parentElements is possible

const parent = heading.parentElement; // get to the div>id=result
parent.style.color = "red";



