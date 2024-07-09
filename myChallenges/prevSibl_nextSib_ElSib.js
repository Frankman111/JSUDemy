//previousSibling
//nextSibling
//return whitespace

//const first = document.querySelector(".first");
//const second = first.nextSibling.nextSibling.style.color ="red"; // displays the next sibling - caution you need two times the nextSibling order

//console.log(second);

// const last = document.querySelector("#last");
// const third = last.previousSibling.previousSibling; // displays the previous sibling
// console.log(third);

// console.log(last.nextSibling.nextSibling); // there is no sibling after the last element

// nextElementSibling
//previousElementSibling
//

const first = document.querySelector(".first");

first.nextElementSibling.style.color = "red"; // no need for twice the order it ignores the whitespace

const last = document.querySelector("#last");

last.previousElementSibling.style.color = "green";