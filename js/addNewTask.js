const formNewTask = document.querySelector('.add-task__form');
const inputForm = document.querySelector('#add-task');
const listTask = document.querySelector('.taskboard__list');
const itemTask = listTask.querySelector('.taskboard__item:not(.task--active)');

const addNewTask = (evt) => {
    evt.preventDefault();

    const textItem = inputForm.value;
    const cloneItemTask = itemTask.cloneNode(true);
    const paragrafClone = cloneItemTask.querySelector('.task__view');
    
    paragrafClone.textContent = textItem;

    cloneItemTask.classList.remove('task--processing');
    cloneItemTask.classList.remove('task--done');
    cloneItemTask.classList.remove('task--basket');

    listTask.appendChild(cloneItemTask);

    inputForm.value = '';
};

formNewTask.addEventListener('submit', addNewTask);