// Define UI Vars
const form = document.querySelector('#task-form');
const taksList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event Listeners
function loadEventListeners(){
    // DOM load Event
    document.addEventListener('DOMContentLoaded', getTasks);
    // Add Task event
    form.addEventListener('submit', addTask);
    // Remove Task Event
    taksList.addEventListener('click', removeTask);
    // Clear task event
    clearBtn.addEventListener('click', clearTask);
    // Filter Task Event
    filter.addEventListener('keyup', filterTask);
}

// Get Tasks From LS
function getTasks(){
    // Check item data in local storage
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){
        // Create li element
        const li = document.createElement('li');
        // Add Class
        li.className = 'collection-item';
        // Create text node and append to li
        li.appendChild(document.createTextNode(task));
        // Create new link element
        const link = document.createElement('a');
        // Add class
        link.className = 'delete-item secondary-content';
        // Add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // Append the link to li
        li.appendChild(link);

        // Append li to ul
        taksList.appendChild(li);
    });
}

// Add task
function addTask(e){
    if(taskInput.value === ''){
        alert('Add a task');
    } else{
        // Create li element
        const li = document.createElement('li');
        // Add Class
        li.className = 'collection-item';
        // Create text node and append to li
        li.appendChild(document.createTextNode(taskInput.value));
        // Create new link element
        const link = document.createElement('a');
        // Add class
        link.className = 'delete-item secondary-content';
        // Add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // Append the link to li
        li.appendChild(link);

        // Append li to ul
        taksList.appendChild(li);

        // Store in LS
        storeTaskInLocalStorage(taskInput.value);

        // Clear Input
        taskInput.value = '';
    }
    e.preventDefault();
}

// Store Tasks
function storeTaskInLocalStorage(task){
    // Check item data in local storage
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are You Sure?')){
            e.target.parentElement.parentElement.remove();

            // Remove from LS
            removeTaskFromLocalStorage(e.target.parentElement.parentElement)
        }
    }
}

// Remove From LS function
function removeTaskFromLocalStorage(taskItem){
    // Check item data in local storage
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear task
function clearTask(){
    // taksList.innerHTML = '';

    // Faster
    while(taksList.firstChild){
        taksList.removeChild(taksList.firstChild);
    }

    // Clear From LS
    clearTaskFromLocalStorage();
}

// Clear tasks From LS
function clearTaskFromLocalStorage(){
    localStorage.clear();
}

// Filter tasks
function filterTask(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLocaleLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}