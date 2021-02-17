var addButton=document.getElementById('add');
var inputTask=document.getElementById('new-task');
var unfinishedTasks=document.getElementById('unfinished-tasks');
var finishedTasks=document.getElementById('done');

function createNewElement(task){
    var listItem=document.createElement('li');
    var checkbox=document.createElement('button');
    checkbox.className='material-icons checkbox';
    checkbox.innerHTML='<i class="material-icons blank">check_box_outline_blank</i>';
    var label=document.createElement('label');
    label.innerText=task;
    var input=document.createElement('input');
    input.type="text";

    var deleteButton=document.createElement('button');
    deleteButton.className='material-icons delete';
    deleteButton.innerHTML='<i class="material-icons">delete</i>';

    var editButton=document.createElement('button');
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
    if (event.keyCode == 13) {
        addTask();
    }
}
function addTask(){
    if(inputTask.value){
        var listItem=createNewElement(inputTask.value);
        unfinishedTasks.appendChild(listItem);
        bindTaskEvents(listItem,finishTask);
        inputTask.value="";
    }
}

addButton.onclick=addTask;

function deleteTask(){
    var listItem=this.parentNode;
    var ul=listItem.parentNode;
    ul.removeChild(listItem);
}

function editTask(){
    var editButton=this;
    var listItem=this.parentNode;
    var label=listItem.querySelector('label');
    var input=listItem.querySelector('input[type=text]');

    var containsClass=listItem.classList.contains('editMode');

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
    var listItem=this.parentNode;
    var checkbox=listItem.querySelector('button.checkbox');
    checkbox.className='material-icons checkbox';
    checkbox.innerHTML='<i class="material-icons">check_box</i>';

    finishedTasks.appendChild(listItem);
    bindTaskEvents(listItem,unfinishTask);
}

function unfinishTask(){
    var listItem=this.parentNode;
    var checkbox=listItem.querySelector('button.checkbox');
    checkbox.className='material-icons checkbox';
    checkbox.innerHTML='<i class="material-icons blank">check_box_outline_blank</i>';

    unfinishedTasks.appendChild(listItem);
    bindTaskEvents(listItem,finishTask);
}

function bindTaskEvents(listItem, checkboxEvent){
    var checkbox=listItem.querySelector('button.checkbox');
    var editButton=listItem.querySelector('button.edit');
    var deleteButton=listItem.querySelector('button.delete');

    checkbox.onclick=checkboxEvent;
    editButton.onclick=editTask;
    deleteButton.onclick=deleteTask;
}