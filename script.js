const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const listItem = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.width = "auto";
    checkbox.style.marginRight = "10px";

    const taskLabel = document.createElement("span");
    taskLabel.textContent = taskText;

    checkbox.addEventListener("change", function () {
        taskLabel.style.textDecoration =
            checkbox.checked ? "line-through" : "none";
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(taskLabel);
    taskList.appendChild(listItem);

    taskInput.value = "";
});