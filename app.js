//define UI Variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all even listeners

loadEventListeners();



function loadEventListeners() {
//DOM Load event
  document.addEventListener('DOMContentLoaded' , getTasks);

//add task event
    form.addEventListener('submit', addTask);
//remove task event
 taskList.addEventListener('click', removeTask);
//clear task event
clearBtn.addEventListener('click', clearTasks);

//filter task event
filter.addEventListener('keyup', filterTasks);

}

// get tasks from Local Storage

function getTasks(e){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        task = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){
         // create li element

    const li = document.createElement('li');
    //add class

     li.className ='collection-item';

    //create text node and append to li
     li.appendChild(document.createTextNode(task));

    //create new link element

     const link = document.createElement('a');

    //add class

    link.className = 'delelet-item secondary-content';

    // add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    
    //append the link to li

    li.appendChild(link);

    //append li to ul
    taskList.appendChild(li);

    });

}

//add task

function addTask(e) {
    if(taskInput.value === ''){
        alert('Add a Task');

        // create li element

    const li = document.createElement('li');
    //add class

     li.className ='collection-item';

    //create text node and append to li
     li.appendChild(document.createTextNode(taskInput.value));

    //create new link element

     const link = document.createElement('a');

    //add class

    link.className = 'delelet-item secondary-content';

    // add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    
    //append the link to li

    li.appendChild(link);

    //append li to ul
    taskList.appendChild(li);



    // store in local storage

    storeTaskInLocalStorage(taskInput.value);

    //clear input

    taskInput.value = '';

    e.preventDefault();
}

//Store Task
function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        task = JSON.parse(localStorage.getItem('tasks'));
    }

    task.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//remove task

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
          e.target.parentElement.parentElement.remove();
    }
  }
}

//clear task

function clearTasks(e){
while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
     }

    }


//filter tasks

function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach();
    (function(task) {
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
               task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    })
}


}