let tasks = [];

let taskInput = document.getElementById("taskInput");
let addTask = document.getElementById("addTask");
let taskList = document.getElementById("taskList");

addTask.addEventListener("click", function () {
    let task = taskInput.value;

    tasks.push(task);

    taskList.innerHTML = "";

    for (let task of tasks) {
        let li = document.createElement("li");
        li.textContent = task;
        taskList.appendChild(li);
    }
     console.log(tasks.length);

    taskInput.value = "";

});