const todoForm = document.querySelector("#todoForm");
todoForm.addEventListener("submit", handleInsertTodoItem)
const jstodo = todoForm.querySelector(".js-todo");
const ulTodoList = document.querySelector(".js-todoList");

let todoList = [];

function initTodo() {
    todoList = loadTodoList();
    paintTodoList(todoList);
}

function handleInsertTodoItem(event) {
    event.preventDefault();
    const todoitem = { "id": newId(), "todo": jstodo.value };
    jstodo.value = "";
    todoList.push(todoitem);
    saveTodoList(todoList);
    paintTodoItem(todoitem);
}


function handledeleteTodoItem(event) {
    const li = event.target.parentNode;
    const removeId = li.id;
    ulTodoList.removeChild(li);
    todoList = todoList.filter(todoItem => {
        return todoItem.id !== parseInt(removeId);
    });
    saveTodoList(todoList);
}

function saveTodoList(todoList) {
    localStorage.setItem("todolist", JSON.stringify(todoList));
}

function loadTodoList() {
    const loadedTodoList = localStorage.getItem("todolist");
    return (loadedTodoList !== null) ? JSON.parse(loadedTodoList) : [];
}

function paintTodoItem(todoItem) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delbtn = document.createElement("button");
    li.id = todoItem.id;
    span.innerText = todoItem.todo;
    delbtn.innerText = "❌";
    delbtn.addEventListener("click", handledeleteTodoItem);
    li.appendChild(delbtn);
    li.appendChild(span);
    ulTodoList.appendChild(li);
}

function paintTodoList(todoList) {
    todoList.forEach(todoItem => paintTodoItem(todoItem));
}

function newId() {
    return new Date().getTime();
}

initTodo();