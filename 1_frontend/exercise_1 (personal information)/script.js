function addTask() {
    var input = document.getElementById("taskInput");
    var taskText = input.value.trim();

    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var taskItem = document.createElement("li");
        taskItem.textContent = taskText;
        taskItem.onclick = toggleTask;
        taskList.appendChild(taskItem);
        input.value = "";
    }
}

function toggleTask() {
    this.classList.toggle("completed");
}