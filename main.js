"use strict";

const tasks = [
  { name: "Recoger setas en el campo", completed: true, id: 1 },
  { name: "Comprar pilas", completed: true, id: 2 },
  { name: "Poner una lavadora de blancos", completed: true, id: 3 },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
    id: 4,
  },
];
console.log(tasks);

const list = document.querySelector(".listTask");
const checked = document.querySelector(".checked");
const inputCheck = document.querySelector(".inputCheck");

for (const task of tasks) {
  list.innerHTML += `
  <li> <input class="inputCheck" id="${task.id}" type="checkbox">
  ${task.name} 
  </li> 
 `;
  console.log(task);
}

function handleClick(event) {
  if (event.target.classList.contains("inputCheck")) {
    const listItem = event.target.parentElement;
    listItem.classList.toggle("checked");
  }
}

list.addEventListener("click", handleClick);
