const listTasks = document.querySelectorAll('.taskboard__list');
const emptyTasks = document.querySelectorAll('.task--empty')

const startView = () => {
    listTasks.forEach((item) => {
        const activeTask = item.querySelector('.task--active');
        activeTask.classList.remove('task--active');
    });
    
    emptyTasks.forEach((item) => {
        item.style.display = 'none';
    })
};

export { startView };
