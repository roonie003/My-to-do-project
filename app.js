//define UI Variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all even listeners

loadEventListeners();

//add task event

function loadEventListeners() {
    form.addEventListener('submit', addTask);
//remove task event
 taskList.addEventListener('click', removeTask);
//clear task event
clearBtn.addEventListener('click', clearTasks);

//filter task event
filter.addEventListener('keyup', filterTasks);

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

    //clear input

    taskInput.value = '';

    e.preventDefault();
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
}