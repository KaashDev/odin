const container = document.querySelector("#container");
const display = container.firstElementChild;
console.log(display);

const controls = document.querySelector(".controls");
const display2 = controls.previousElementSibling;
console.log(display2);

const div = document.createElement("div");
div.style.color = "blue";
div.setAttribute("style", "color:blue; background-color:beige;");

div.setAttribute("id", "theDiv");
console.log(div.getAttribute("id"));
//div.removeAttribute("id");

div.classList.add("new");
div.classList.remove("new");
div.classList.toggle("active");
console.log(div.getAttribute("class"));

div.textContent = "Hello World!";
//div.innerHTML = "<span>Hello Worllllddd!!!";
container.appendChild(div);