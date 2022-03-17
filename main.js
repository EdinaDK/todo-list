const input = document.getElementById("input");
const addTodoButton = document.getElementById("addTodoButton");

addTodoButton.addEventListener("click", newElement);
const todoUL = document.querySelector('ul');
const todos = todoUL.innerHTML;

function toLocal() {
    localStorage.setItem('todos', todos);
}

todoUL.addEventListener('click', function (ev) {
    if(ev.target.tagName === "LI") {
        ev. target.classList.toggle('completed');
            toLocal();
    } else if (ev.target.tagName === "SPAN") {
        var div = ev.target.parentNode;
        div.remove();
        toLocal();
    }}, false);

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("input").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("ничего не деланием мы уже занимаемся");
    } else {
        document.getElementById("todoUL").appendChild(li);
    }
    document.getElementById("input").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    const close = document.getElementsByClassName("close");

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            const div = this.parentElement;
            div.style.display = "none";
        }
    }

    toLocal();
}

function handleKeyPress(e){
    var key=e.keyCode || e.which;
    if (key === 13){ // Клавиша Enter
        newElement();
        toLocal();
    }
}

{
    if (localStorage.getItem('todos')) {
        todoUL.innerHTML = localStorage.getTtem('todos');
    }
}

    function showAll() {
    }

    function showCompleted() {
    }

    function showUncompleted() {
    }




