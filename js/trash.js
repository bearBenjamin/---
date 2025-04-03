const taskListTrash = document.querySelector('.taskboard__list--trash');
const btnClear = document.querySelector('.button--clear');
const taskEmptyTrash = taskListTrash.querySelector('.task--empty-trash');

btnClear.addEventListener('click', () => {
    taskListTrash.replaceChildren(taskEmptyTrash);
    taskEmptyTrash.style.display = 'block';
    btnClear.disabled = true;
});

