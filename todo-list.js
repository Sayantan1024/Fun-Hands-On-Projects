const todoList = [ {
    name: 'make dinner',
    dueDate: '2022-12-22'
}, {
    name: 'wash dishes',
    dueDate: '2023-12-24'
}];

rendertodoList();

function rendertodoList() {
    let todohtml = '';

    todoList.forEach((todoObject, index) => {
        const { name, dueDate } = todoObject;
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class = "delete-todo-btn js-delete-todo-btn">Delete</button>
        `;
        todohtml+=html;
    } );

    /*for(let i=0; i<todoList.length; i++) {
        const todoObject = todoList[i];
        //const name = todoObject.name;
        //const dueDate = todoObject.dueDate;
        const { name, dueDate } = todoObject;
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick = 
                "todoList.splice(${i},1);
                rendertodoList();
            " class = "delete-todo-btn">Delete</button>
        `;
        todohtml+=html;
    }*/

    document.querySelector('.js-todo-list').innerHTML = todohtml;

    document.querySelectorAll('.js-delete-todo-btn')
        .forEach((deleteBtn, index) => {
            deleteBtn.addEventListener('click', () => {
                todoList.splice(index,1);
                rendertodoList();
            })
        })
}

document.querySelector('.js-add-todo-btn')
    .addEventListener('click', () => {
        addToDo();
    });

function addToDo() {
    const inputElement = document.querySelector('.js-input');
    const name = inputElement.value;
    
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({
        //name: name,
        //dueDate: dueDate,
        name,
        dueDate
    });

    inputElement.value = "";
    rendertodoList();
}