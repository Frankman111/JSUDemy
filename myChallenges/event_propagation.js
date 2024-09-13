// allows select dynamic elements
// event propagation - order the events are fired
// event bubbling - clicked element first then bubbles up -- default

const container = document.querySelector(".container");
// const heading = document.querySelector(".heading");
const btn = document.querySelector(".btn");

function sayHello(){
  console.log("Hello There!");
  
}

btn.addEventListener("click", function(){
  const element = document.createElement("h1");
  element.classList.add("heading");
  element.textContent =  `i am inside the container`;
  container.appendChild(element);
});

container.addEventListener("click", function(e){
  if(e.target.classList.contains("heading")){
    console.log("Hallo welt");
    
  }
});

// heading.addEventListener("click", sayHello);