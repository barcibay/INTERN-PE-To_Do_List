document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `

            <div class="boxes">
                <span class="task-text" style="text-align:center; display:flex; align-items:center;">${taskText}</span>
               <input type="checkbox" style="padding-right:20px; " class="checkbox">
                <button class="delete">Delete</button>
            </div>
            `;
            taskList.appendChild(li);
            taskInput.value = "";
        }
    });

    taskList.addEventListener("click", function (event) {
        const target = event.target;
        if (target.classList.contains("delete")) {
            target.parentElement.remove();
        } else if (target.classList.contains("checkbox")) {
            const taskText = target.previousElementSibling;
            if (target.checked) {
                taskText.classList.add("completed");
            } else {
                taskText.classList.remove("completed");
            }
        }
    });
});
