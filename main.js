"use strict";

const GITHUB_USER = "sprietoviciana";
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;
const list = document.querySelector(".listTask");
const checked = document.querySelector(".checked");
const inputCheck = document.querySelector(".inputCheck");
const inputNewTask = document.querySelector(".input");
const button = document.querySelector(".js-btn-newTask");

//listado vacio
let tasks = [];

const handleNewTask = (event) => {
  event.preventDefault();
  const newTask = inputNewTask.value;
  const addTask = {
    name: `${newTask}`,
    completed: false,
  };
  tasks.push(addTask);

  for (const task of tasks) {
    list.innerHTML += `
  <li> <input class="inputCheck" id="${task.id}" type="checkbox">
  ${task.name} 
  </li>
 `;
  }
  button.addEventListener("click", handleNewTask); //que le pasa al puto boton!!!!
};

//llamada al servidor
fetch(SERVER_URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    tasks = data.results;

    for (const task of tasks) {
      list.innerHTML += `
  <li> <input class="inputCheck" id="${task.id}" type="checkbox">
  ${task.name} 
  </li> 
 `;
    }
  });

// funcion y evento para checkear y tachar
function handleClick(event) {
  if (event.target.classList.contains("inputCheck")) {
    const listItem = event.target.parentElement;
    listItem.classList.toggle("checked");
  }
}

list.addEventListener("click", handleClick);

// inputCheck.addEventListener("click", handleClick);

//coger el valor del input y meterlo a la lista de tareas
