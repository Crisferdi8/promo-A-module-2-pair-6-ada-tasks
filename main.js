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
const inputNewTask = document.querySelector(".input");
const button = document.querySelector(".js-btn-newTask");

const handleNewTask = (event) => {
  event.preventDefault();
  const newTask = inputNewTask.value;
  const addTask = {
    name: `${newTask}`,
    completed: false,

  }
  tasks.push(addTask);
  console.log(handleNewTask);

  for (const task of tasks) {
    list.innerHTML += `
  <li> <input class="inputCheck" id="${task.id}" type="checkbox">
  ${task.name} 
  </li>
 `
  }

};
button.addEventListener("click", handleNewTask);

function handleClick() {
  inputCheck.classList.add("checked");
}


inputCheck.addEventListener("click", handleClick);