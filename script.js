// Select the necessary DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value;

    if (taskText.trim() === '') {
        alert("Please enter a task!");
        return;
    }

    // Create new list item (li) element
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Add event listener to mark task as done when clicked
    listItem.addEventListener('click', function() {
        listItem.classList.toggle('done');
    });

    // Add the task to the task list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = '';
}

// Event listener for the "Add Task" button
addTaskButton.addEventListener('click', addTask);

// Optionally, add task when pressing "Enter" key
taskInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
