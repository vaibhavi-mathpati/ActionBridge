const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");

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
       const completedTasks = tasks.filter(function (task) {
    return task.completed;
}).length;

const totalTasks = tasks.length;

const percentage = totalTasks === 0
    ? 0
    : Math.round((completedTasks / totalTasks) * 100);

progressText.textContent =
    `${completedTasks} of ${totalTasks} tasks completed (${percentage}%)`;

progressBar.value = percentage;

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
           const goalInput = document.getElementById("goalInput");
const suggestButton = document.getElementById("suggestButton");
const suggestions = document.getElementById("suggestions");
const customStepSection = document.getElementById("customStepSection");
const customStepInput = document.getElementById("customStepInput");
const addCustomStepButton = document.getElementById("addCustomStep");

// Basic goal-based step suggestions
function getGoalSteps(goal) {
    const text = goal.toLowerCase();

    if (text.includes("python")) {
        return [
            "Set up Python and VS Code",
            "Learn variables and data types",
            "Practise if-else conditions",
            "Learn loops",
            "Practise functions",
            "Build a small Python project"
        ];
    }

    if (text.includes("java")) {
        return [
            "Set up Java and an editor",
            "Learn variables and data types",
            "Understand conditions and loops",
            "Practise methods and arrays",
            "Learn object-oriented programming",
            "Build a small Java project"
        ];
    }

    if (text.includes("web") || text.includes("website")) {
        return [
            "Learn basic HTML",
            "Create a page structure",
            "Style the page using CSS",
            "Learn JavaScript basics",
            "Add interactive features",
            "Build a small website"
        ];
    }

    if (text.includes("project")) {
        return [
            "Choose a problem to solve",
            "List the main features",
            "Design the user interface",
            "Build one feature at a time",
            "Test and fix errors",
            "Write project documentation"
        ];
    }

    return [
        "Define your goal clearly",
        "Break it into smaller tasks",
        "Complete the easiest first step",
        "Practise a little each day",
        "Review your progress",
        "Finish and review your goal"
    ];
}

function showStepSuggestions() {
    const goal = goalInput.value.trim();

    if (goal === "") {
        alert("Please enter your goal first!");
        return;
    }

    suggestions.innerHTML = "";
    customStepSection.hidden = false;

    const heading = document.createElement("h3");
    heading.textContent = "Your suggested steps";
    suggestions.appendChild(heading);

    const list = document.createElement("ul");

    getGoalSteps(goal).forEach(function (step) {
        const item = document.createElement("li");
        const text = document.createElement("span");
        text.textContent = step + " ";

        const addButton = document.createElement("button");
        addButton.textContent = "Add to Tasks";

        addButton.addEventListener("click", function () {
            tasks.push({
                text: step,
                completed: false
            });

            saveTasks();
            renderTasks();

            addButton.textContent = "Added ✓";
            addButton.disabled = true;
        });

        item.appendChild(text);
        item.appendChild(addButton);
        list.appendChild(item);
    });

    suggestions.appendChild(list);
}

suggestButton.addEventListener("click", showStepSuggestions);

addCustomStepButton.addEventListener("click", function () {
    const step = customStepInput.value.trim();

    if (step === "") {
        alert("Please enter your step!");
        return;
    }

    tasks.push({
        text: step,
        completed: false
    });

    saveTasks();
    renderTasks();
    const goalInput = document.getElementById("goalInput");
const suggestButton = document.getElementById("suggestButton");
const suggestions = document.getElementById("suggestions");
const customStepSection = document.getElementById("customStepSection");
const customStepInput = document.getElementById("customStepInput");
const addCustomStepButton = document.getElementById("addCustomStep");

// Basic goal-based step suggestions
function getGoalSteps(goal) {
    const text = goal.toLowerCase();

    if (text.includes("python")) {
        return [
            "Set up Python and VS Code",
            "Learn variables and data types",
            "Practise if-else conditions",
            "Learn loops",
            "Practise functions",
            "Build a small Python project"
        ];
    }

    if (text.includes("java")) {
        return [
            "Set up Java and an editor",
            "Learn variables and data types",
            "Understand conditions and loops",
            "Practise methods and arrays",
            "Learn object-oriented programming",
            "Build a small Java project"
        ];
    }

    if (text.includes("web") || text.includes("website")) {
        return [
            "Learn basic HTML",
            "Create a page structure",
            "Style the page using CSS",
            "Learn JavaScript basics",
            "Add interactive features",
            "Build a small website"
        ];
    }

    if (text.includes("project")) {
        return [
            "Choose a problem to solve",
            "List the main features",
            "Design the user interface",
            "Build one feature at a time",
            "Test and fix errors",
            "Write project documentation"
        ];
    }

    return [
        "Define your goal clearly",
        "Break it into smaller tasks",
        "Complete the easiest first step",
        "Practise a little each day",
        "Review your progress",
        "Finish and review your goal"
    ];
}

function showStepSuggestions() {
    const goal = goalInput.value.trim();

    if (goal === "") {
        alert("Please enter your goal first!");
        return;
    }

    suggestions.innerHTML = "";
    customStepSection.hidden = false;

    const heading = document.createElement("h3");
    heading.textContent = "Your suggested steps";
    suggestions.appendChild(heading);

    const list = document.createElement("ul");

    getGoalSteps(goal).forEach(function (step) {
        const item = document.createElement("li");
        const text = document.createElement("span");
        text.textContent = step + " ";

        const addButton = document.createElement("button");
        addButton.textContent = "Add to Tasks";

        addButton.addEventListener("click", function () {
            tasks.push({
                text: step,
                completed: false
            });

            saveTasks();
            renderTasks();

            addButton.textContent = "Added ✓";
            addButton.disabled = true;
        });

        item.appendChild(text);
        item.appendChild(addButton);
        list.appendChild(item);
    });

    suggestions.appendChild(list);
}

suggestButton.addEventListener("click", showStepSuggestions);

addCustomStepButton.addEventListener("click", function () {
    const step = customStepInput.value.trim();

    if (step === "") {
        alert("Please enter your step!");
        return;
    }

    tasks.push({
        text: step,
        completed: false
    });

    saveTasks();
    renderTasks();

    customStepInput.value = "";
});

    customStepInput.value = "";
}); 
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
        getSuggestions("Prepare for DBMS exams")
    }
});
suggestButton.addEventListener("click", showStepSuggestions);

renderTasks();

async function getSuggestions(task) {
    const response = await fetch("http://127.0.0.1:5000/suggest", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            task: task
        })
    });

    const data = await response.json();

    console.log(data);

}

