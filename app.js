// window object = browser api
// document
// console.dir
//alert("Hello")
//console.dir(document);

                                                // Tutorial getElementById

//select the element or group of elements the we want 
// decide the effect we want to apply to the selection

//getElementById("element")

// const h1 = document.getElementById("title");

// h1.style.color = "red";

// const btn = document.getElementById("btn")

// btn.style.backgroundColor = "blue";

// btn.style.color = "white";



                                                // Tutorial getElementsByTagName    

// getElementsByTagName("tagname")
// HTMLCollection = array-like object
// index, length property but not array methods (forEach)

// const headings = document.getElementsByTagName("h2");
// headings[0].style.color = "red";
// console.log(headings.length);

//const items = document.getElementsByTagName("li");
// items.forEach(function(item)
// {
//     //returns item.forEach is not a function
// });

// querySelectorAll() in most cases
// NodeList - objects are collections of nodes
// can run forEach
// turn them into array - spread operator [...]
// after that can use any array properties

// const betterItems = [...items];

// betterItems.forEach(function(item){
//     console.log(item);
// })

// console.log(items);
// console.log(betterItems);

                                                    //Tutorial getElementsByClassName

// const listItems = document.getElementsByClassName("special");
// listItems[2].style.color = "blue";
// console.log(listItems);

                                                    //Tutorial querySelector

//querySelector("any css"); -> selects single
//querySelectorAll("any css") -> selects all

const result = document.querySelector("#result");

result.style.backgroundColor = "blue";

const item = document.querySelector(".special");

// console.log(item); // returns the first element

const lastItem = document.querySelector("li:last-child");
// console.log(lastItem);

const list = document.querySelectorAll(".special");
//console.log(list);

list.forEach(function(item){
    console.log(item);
    item.style.color = "yellow";
});

