// createElement("element")
// createTextNode("text content")
// element.appendChild(childElement)

// insertBefore("element", "location"); -> alternative to appendChild
// replaceChild("new", "old")

const result = document.querySelector("#result");
const first = document.querySelector(".red");
// create empty element
const bodyDiv = document.createElement("div");

// create TextNode
const text = document.createTextNode("a simple body div");
bodyDiv.appendChild(text);
//document.body.appendChild(bodyDiv); -> removed for the insertBefore initialisation

//insertBefore example
document.body.insertBefore(bodyDiv, result);
// result element


const heading = document.createElement("h2");
const headingText = document.createTextNode("dynamic heading");
heading.appendChild(headingText);
heading.classList.add("blue");
//result.appendChild(heading); -> removed for the insertBefore initialisation
result.insertBefore(heading, first);

const smallHeading = document.createElement("h6");
const smallText = document.createTextNode("i am small heading");
smallHeading.classList.add("red");
smallHeading.appendChild(smallText);
document.body.replaceChild(smallHeading, bodyDiv);


console.log(result.children);