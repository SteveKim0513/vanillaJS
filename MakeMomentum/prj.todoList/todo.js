const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");



const TODO_LOCALSTORAGE = 'toDos';

// list of ToDos
let toDos = [];


function deleteToDo(event) {

    // remove ToDo from HTML
    const targetBtn = event.target;
    const targetLi = targetBtn.parentNode;

    toDoList.removeChild(targetLi);

    // update toDo array
    const cleanToDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(targetLi.id);
        console.log("done");
    });

    toDos = cleanToDos;

    // update ToDo to localStorage
    saveToDos();

}

function saveToDos() {
    // object to string to save into localStorage
    localStorage.setItem(TODO_LOCALSTORAGE, JSON.stringify(toDos));
}

function paintToDo(inputValue) {
    // create elements for making list
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = inputValue;
    const delBtn = document.createElement("button");
    delBtn.innerText = "Del";
    delBtn.addEventListener("click", deleteToDo);

    // ID to distinguish each list
    const listId = toDos.length + 1;

    // make layer of list elements
    li.id = listId;
    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);

    // append input task to ToDoList
    const toDoObj = {
        id: listId,
        text: inputValue
    };
    toDos.push(toDoObj);

    // save ToDo list into LocalStorage
    saveToDos();
}

function addToDo(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDoList() {
    const loadToDos = localStorage.getItem(TODO_LOCALSTORAGE);
    if (loadToDos !== null) {
        // string to object
        const parsedLoadToDos = JSON.parse(loadToDos);
        parsedLoadToDos.forEach(function (parsedObj) {
            paintToDo(parsedObj.text);
        });

    }
}

function init() {
    loadToDoList();
    toDoForm.addEventListener("submit", addToDo)

}


init();