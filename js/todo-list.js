function getNewID() {
      let id = Date.now();
      return id.toString();

}

function createButtonContainer() {
      let buttonContainer = document.createElement('div');
      buttonContainer.classList.add('task-controls', 'flex-row');

      let buttonID = getNewID();

      let buttonFinished = document.createElement('button');
      buttonFinished.setAttribute('id', buttonID);
      buttonFinished.innerHTML = 
            "<i class='fa-solid fa-check'><span class='sr-only'>Mark task finished</span></i>";
      buttonFinished.addEventListener('click', (e) => {
            markTaskFinished(e.target.id);
      })

      let buttonDelete = document.createElement('button');
      buttonDelete.setAttribute('id', buttonID);
      buttonDelete.innerHTML = 
            "<i class='fa-solid fa-xmark'><span class='sr-only'>Delete task</span></i>";
      buttonDelete.addEventListener('click', (e) => {
            deleteTask(e.target.id);
      })

      buttonContainer.appendChild(buttonFinished);
      buttonContainer.appendChild(buttonDelete);


      let button = {buttonID: buttonID, object: buttonContainer}
      return button
}

function createNewTask(input) {
      let buttonContainer = createButtonContainer();

      let newTask = document.createElement('div');
      newTask.classList.add("unfinished-tasks-item", "flex-row");
      newTask.setAttribute('id', buttonContainer.buttonID);

      let newTaskText = document.createElement('p');
      newTaskText.innerText = input;

      newTask.appendChild(newTaskText);
      newTask.appendChild(buttonContainer.object);

      return newTask;
}


function createFinishedTask(input) {
      let finishedTask = document.createElement('p');
      finishedTask.classList.add('finished-tasks-item')
      finishedTask.innerText = input;

      return finishedTask;
}

function addNewTask() {
      let unfinishedTasksList = document.querySelector(".unfinished-tasks-list");
      input = document.querySelector("#new-task-input");

      if (input.value == "") {
            alert("Enter a task into the textbox first");
            return;
      } 

let newTask = createNewTask(input.value);

      unfinishedTasksList.appendChild(newTask);
      input.value = "";
}

// Event listener for function is added when button is created in createButtonContainer();
function deleteTask(taskID) {
      let taskToBeDeleted = document.querySelector(`#${CSS.escape(taskID)}`);
      let unfinishedTasksList = document.querySelector(".unfinished-tasks-list");

      unfinishedTasksList.removeChild(taskToBeDeleted);
}

function markTaskFinished(taskID) {
      let taskToBeFinished = document.querySelector(`#${CSS.escape(taskID)}`);
      let unfinishedTasksList = document.querySelector(".unfinished-tasks-list");
      let finishedTasksList = document.querySelector(".finished-tasks-list")

      let finishedTaskText = taskToBeFinished.firstChild;
      finishedTaskText = finishedTaskText.textContent;

      unfinishedTasksList.removeChild(taskToBeFinished);
      finishedTasksList.appendChild(createFinishedTask(finishedTaskText));
}



document.querySelector("#btn-add-new-task").addEventListener('click', addNewTask);