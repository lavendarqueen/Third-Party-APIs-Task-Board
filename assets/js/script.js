// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
  console.log("running function generateTaskId");
  const randomTaskId = Math.round(Math.random() * 1000);
  console.log(randomTaskId);

  return randomTaskId;
}

// Todo: create a function to create a task card
function createTaskCard(task = {}) {
  console.log("running function createTaskCard");
  if (typeof task.name !== "string") {
    console.log("Task name must be a string.");
    return null;
  }

  if (typeof task.description !== "string") {
    console.log("Task description must be a string.");
    return null;
  }

  if (typeof task.deadline !== "string") {
    console.log("Task name must be a string.");
    return null;
  }

  const taskId = generateTaskId();
  task.id = taskId;
  console.log(task);

  taskList.push(task);
  // if (taskList.length >= 1) {
  // }
  localStorage.setItem("tasks", taskList);
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
  console.log("running function renderTaskList");

  const todoCards = $("#todo-cards");
  console.log(todoCards);

  if (taskList.length > 0) {
    taskList.forEach((element) => {
      console.log(element);
      const taskElem = $(`<span id="todo-${element.id}">
        ${element.name}
      </span>`);
      console.log(taskElem);
    });
  }
}

// Todo: create a function to handle adding a new task
function handleAddTask(event) {
  console.log("running function");
  event.preventDefault();
  console.log(event.target);
  $("#to-do").draggable({
    create: function (event, ui) {
      event.preventDefault();
      console.log({ event, ui });
    },
  });
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {
  console.log("running function");
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
  console.log("running function");
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
  console.log("Document loaded.");
  $(".btn-success").click(handleAddTask);
  // createTaskCard()
});
