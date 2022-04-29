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
            return e.target.id;
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


      /* ADDED TO MAKE TESTING EASIER REMOVE WHEN DONE */
      if (input == "") {
            input = "Test"
      }
      /* ADDED TO MAKE TESTING EASIER REMOVE WHEN DONE */


      // Need to implement a way to cancel process if there's no input
      let newTaskText = document.createElement('p');
      newTaskText.innerText = input;

      newTask.appendChild(newTaskText);
      newTask.appendChild(buttonContainer.object);

      return newTask;
}

function addNewTask() {
      let unfinishedTasksList = document.querySelector(".unfinished-tasks-list");
      input = document.querySelector("#new-task-input");

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



document.querySelector("#btn-add-new-task").addEventListener('click', addNewTask);



// Add's task on page load so I don't have to when I want to test something
window.onload = function() {
      addNewTask();
}