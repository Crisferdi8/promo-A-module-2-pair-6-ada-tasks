"use strict";

const GITHUB_USER = "sprietoviciana";
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;

let tasks = [];

const list = document.querySelector(".listTask");
const checked = document.querySelector(".checked");
const inputCheck = document.querySelector(".inputCheck");
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
      // console.log(task);
    }
  });

function handleClick(event) {
  if (event.target.classList.contains("inputCheck")) {
    const listItem = event.target.parentElement;
    listItem.classList.toggle("checked");
  }
}

list.addEventListener("click", handleClick);
