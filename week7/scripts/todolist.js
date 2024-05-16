const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const feedback = document.getElementById("feedback");
const todoList = document.getElementById("todoList");
const doneList = document.getElementById("doneList");


addTaskBtn.addEventListener("click", function () {

  const taskText = taskInput.value.trim();


  if (taskText === "") {

    alert("Please enter a task!");

    return;

  }


  const newTask = document.createElement("li");

  newTask.innerHTML = `

                <div class="todo-item">

                    <input type="checkbox">

                    <span>${taskText}</span>

                    <button class="delete-btn">Delete</button>

                </div>

            `;

  todoList.appendChild(newTask);

  updateListTitle();

  taskInput.value = "";

});

function moveTask (taskItem, fromList, toList) {

  fromList.removeChild(taskItem);

  toList.appendChild(taskItem);

  taskItem.querySelector("input[type='checkbox']").checked = false;

  updateListTitle();

}


todoList.addEventListener("change", function (event) {

  console.log(event.target.parentNode.parentNode);


  if (event.target.type === "checkbox") {

    const taskItem = event.target.parentNode.parentNode;

    moveTask(taskItem, todoList, doneList);

  }
  updateListTitle();

});


doneList.addEventListener("change", function (event) {

  if (event.target.type === "checkbox") {

    const taskItem = event.target.parentNode.parentNode;

    moveTask(taskItem, doneList, todoList);

    updateListTitle();

  }

});


todoList.addEventListener("click", function (event) {

  if (event.target.classList.contains("delete-btn")) {

    const taskItem = event.target.parentNode.parentNode;

    todoList.removeChild(taskItem);

    updateListTitle();

  }

});


doneList.addEventListener("click", function (event) {

  if (event.target.classList.contains("delete-btn")) {

    const taskItem = event.target.parentNode.parentNode;

    doneList.removeChild(taskItem);

    updateListTitle();
  }

});



const updateListTitle = () => {
  console.log(todoList.children);
  todoTitle.textContent = `Tasks to-do - ${todoList.children.length}`;

  doneTitle.textContent = `Done - ${doneList.children.length}`;


  if (todoList.children.length > 0) {

    todoTitle.style.display = "block";

  } else {

    todoTitle.style.display = "none";

  }


  if (doneList.children.length > 0) {

    doneTitle.style.display = "block";

  } else {

    doneTitle.style.display = "none";

  }




}

updateListTitle();