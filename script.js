const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(
    localStorage.getItem("actionBridgeTasks")
) || [];

function saveTasks() {
    localStorage.setItem(
        "actionBridgeTasks",
        JSON.stringify(tasks)
    );
}

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach(function (task, index) {
        const listItem = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.style.width = "auto";
        checkbox.style.marginRight = "10px";

        const taskLabel = document.createElement("span");
        taskLabel.textContent = "✨ " + task.text;
        taskLabel.style.textDecoration =
            task.completed ? "line-through" : "none";

        checkbox.addEventListener("change", function () {
            tasks[index].completed = checkbox.checked;
            saveTasks();
            renderTasks();
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "🗑️";
        deleteButton.title = "Delete task";
        deleteButton.style.marginLeft = "12px";

        deleteButton.addEventListener("click", function () {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        });

        listItem.appendChild(checkbox);
        listItem.appendChild(taskLabel);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
    });
}

addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("🌸 Please enter a task!");
        return;
    }

    tasks.push({
        text: taskText,
        completed: false
    });

    saveTasks();
    renderTasks();

    taskInput.value = "";
});

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTaskButton.click();
    }
});

renderTasks();