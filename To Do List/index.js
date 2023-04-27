// This is the array that will hold the todo list items
let todoItems = [];

// This function will create a new todo object based on the
// text that was entered in the text input, and push it into
// the `todoItems` array
function addTodo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  todoItems.push(todo);
  console.log(todoItems);
}

// Select the form element
const form = document.querySelector('.js-form');
// Add a submit event listener
form.addEventListener('submit', event => {
  // prevent page refresh on form submission
  event.preventDefault();
  // select the text input
  const input = document.querySelector('.js-todo-input');

  // Get the value of the input and remove whitespace
  const text = input.value.trim();
  if (text !== '') {
    addTodo(text);
    input.value = '';
    input.focus();
  }
});

function showTasks() {
    // Get the data from localStorage
    let getLocalStorageData = localStorage.getItem("New Todo");
    
    // Check if data is null, create an empty array, else parse the data
    if (getLocalStorageData == null) {
      listArray = [];
    } else {
      listArray = JSON.parse(getLocalStorageData);
    }
    
    // Get the element to display the number of pending tasks
    const pendingTasksNumb = document.querySelector(".pendingTasks");
    
    // Set the text content of the element to the length of the array
    pendingTasksNumb.textContent = listArray.length;
    
    // If the length of the array is greater than 0, make the delete button active
    if (listArray.length > 0) {
      deleteAllBtn.classList.add("active");
    } else {
      // Else, make the delete button inactive
      deleteAllBtn.classList.remove("active");
    }
    
    // Create an empty string for the new li tag
    let newLiTag = "";
    
    // Loop through the array and create a new li tag for each element with a delete button
    listArray.forEach((element, index) => {
      newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
    });
    
    // Add the new li tags to the ul element
    todoList.innerHTML = newLiTag;
    
    // Clear the input field
    inputBox.value = "";
  }
  

// This function deletes a single task when its "delete" button is clicked.
function deleteTask(index) {
    // Get the list of tasks from local storage
    let getLocalStorageData = localStorage.getItem("New Todo");
    // Convert the list into a JavaScript array
    listArray = JSON.parse(getLocalStorageData);
    // Remove the task at the given index from the array
    listArray.splice(index, 1);
    // Update the local storage with the new array of tasks
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    // Update the display on the webpage
    showTasks();
  }
  
  // This function deletes all tasks in the to-do list when the "delete all" button is clicked.
  deleteAllBtn.onclick = () => {
    // Set the array of tasks to an empty array
    listArray = [];
    // Update the local storage with the new empty array
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    // Update the display on the webpage
    showTasks();
  };