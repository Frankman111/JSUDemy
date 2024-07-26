// innerHTML
// textContent

const list = document.getElementById("first");
const div = document.getElementById("second");
const item = document.querySelector(".item");

console.log(div.textContent); //only insert text
console.log(list.innerHTML); //allows inserting of tags and text
console.log(list.textContent);

const randomVar = "random value"

const ul = document.createElement("ul");
ul.innerHTML = `<li class="item">${randomVar}</li>
      <li>list item</li> <li>list item</li>`; //template string for inserting tags with text

document.body.appendChild(ul)