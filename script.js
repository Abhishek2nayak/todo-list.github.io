const addTaskBtn = document.getElementById("add");
const resetTaskBtn = document.getElementById("reset");

const taskSection = document.getElementById("task-section");

const tasks = document.querySelectorAll(".task");

let i;

for (i = 0; i < tasks.length; i++) {
  deleteTaskBtn.addEventListener("click", deleteTask);
}

function deleteTask() {
  console.log("here");
}

//adding event listner for each button

addTaskBtn.addEventListener("click", addTask);
resetTaskBtn.addEventListener("click", resetTask);

//delete element on click delete button

function resetTask() {
  taskSection.innerHTML = "";
}

function addTask() {
  const form = document.getElementById("tasks-form");
  const task = form.elements[0].value;
  if (task === "") {
    alert("please, add Task First");
  } else {
    taskSection.innerHTML += `
 <div class="task">
    <div class = "task-content">${task}</div>
            <div class = "action">
              <button class="button delete" id="delete">
                <i class="fa-solid fa-trash"></i>
               </button>  
              <button class="button finish" id="finish">
               <i class="fa-solid fa-check"></i>    
              </button>  
    </div>
 </div>   `;

    deleteFunction();
    finishFunction();
  }
}

function deleteFunction() {
  const deleteTaskBtn = document.getElementsByClassName("delete");
  for (i = 0; i < deleteTaskBtn.length; i++) {
    deleteTaskBtn[i].onclick = function () {
      var div = this.parentElement.parentElement;
      div.style.display = "none";
    };
  }
}

function finishFunction() {
  const finishTaskBtn = document.getElementsByClassName("finish");
  for (i = 0; i < finishTaskBtn.length; i++) {
    finishTaskBtn[i].onclick = function () {
      var div = this.parentElement.parentElement;
      var taskText = div.firstElementChild;
      taskText.style.textDecoration = "line-through";
    };
  }
}
