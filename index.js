document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("todo-input");
    const addBtn = document.getElementById("add-btn");
    const todoList = document.getElementById("todo-list");

    // Функція для додавання задачі
    function addTodo() {
        const todoText = input.value.trim();
        if (todoText === "") return; // Перевірка на порожній ввід

        const todoItem = document.createElement("li");
        todoItem.classList.add("todo-item");
        
        const span = document.createElement("span");
        span.textContent = todoText;
        
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Видалити";
        deleteBtn.classList.add("delete-btn");

        // Видалення задачі при натисканні на кнопку
        deleteBtn.addEventListener("click", () => {
            todoList.removeChild(todoItem);
        });

        todoItem.appendChild(span);
        todoItem.appendChild(deleteBtn);
        todoList.appendChild(todoItem);

        input.value = ""; // Очищення поля вводу
    }

    // Подія для кнопки додавання
    addBtn.addEventListener("click", addTodo);

    // Додавання задачі при натисканні Enter
    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            addTodo();
        }
    });
});
