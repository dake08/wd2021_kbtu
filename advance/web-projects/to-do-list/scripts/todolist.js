let addButton = document.getElementById('add');
let inputTask = document.getElementById('new-task');
let unfinishedTasks = document.getElementById('unfinished-tasks');
let finishedTasks = document.getElementById('done');
let clearTasks = document.getElementById('clearIt');

function createNewElement(task){
    let listItem = document.createElement('li');
    let checkbox = document.createElement('button');
    checkbox.className='material-icons checkbox';
    checkbox.innerHTML='<i class="material-icons blank">check_box_outline_blank</i>';
    let label = document.createElement('label');
    label.innerText=task;
    let input = document.createElement('input');
    input.type="text";

    let deleteButton = document.createElement('button');
    deleteButton.className='material-icons delete';
    deleteButton.innerHTML='<i class="material-icons">delete</i>';

    let editButton = document.createElement('button');
    editButton.className='material-icons edit';
    editButton.innerHTML='<i class="material-icons">edit</i>';

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(input);
    listItem.appendChild(deleteButton);
    listItem.appendChild(editButton);

    return listItem;
}

function clickPress(event) {
    if (event.keyCode === 13) {
        addTask();
    }
}

addButton.onclick=addTask;
clearTasks.onclick=clearAllTasks;

function clearAllTasks(){
    let ul = document.getElementById("unfinished-tasks");
    while((ul.getElementsByTagName("li")).length > 0) {
        ul.removeChild(ul.getElementsByTagName("li")[0]);
    }
}

function addTask(){
    if(inputTask.value){
        let listItem = createNewElement(inputTask.value);
        unfinishedTasks.appendChild(listItem);
        bindTaskEvents(listItem,finishTask);
        inputTask.value="";
    }
}

function deleteTask(){
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

function editTask(){
    let editButton = this;
    let listItem = this.parentNode;
    let label = listItem.querySelector('label');
    let input = listItem.querySelector('input[type=text]');

    let containsClass = listItem.classList.contains('editMode');

    if(containsClass){
        label.innerText=input.value;
        editButton.className="material-icons edit";
        editButton.innerHTML= "<i class='material-icons'>edit</i>";
    }else{
        input.value=label.innerText;
        editButton.className="material-icons save";
        editButton.innerHTML= "<i class='material-icons'>save</i>";
    }
    listItem.classList.toggle('editMode');
}

function finishTask(){
    let listItem = this.parentNode;
    let checkbox = listItem.querySelector('button.checkbox');
    checkbox.className='material-icons checkbox';
    checkbox.innerHTML='<i class="material-icons">check_box</i>';

    finishedTasks.appendChild(listItem);
    bindTaskEvents(listItem,unfinishTask);
}

function unfinishTask(){
    let listItem = this.parentNode;
    let checkbox = listItem.querySelector('button.checkbox');
    checkbox.className='material-icons checkbox';
    checkbox.innerHTML='<i class="material-icons blank">check_box_outline_blank</i>';

    unfinishedTasks.appendChild(listItem);
    bindTaskEvents(listItem,finishTask);
}

function bindTaskEvents(listItem, checkboxEvent){
    let checkbox = listItem.querySelector('button.checkbox');
    let editButton = listItem.querySelector('button.edit');
    let deleteButton = listItem.querySelector('button.delete');

    checkbox.onclick=checkboxEvent;
    editButton.onclick=editTask;
    deleteButton.onclick=deleteTask;
}