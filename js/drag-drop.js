const taskBoards = document.querySelectorAll('.taskboard__list');
const tasks = document.querySelectorAll('.taskboard__item');

const boardBacklog = document.querySelector('.taskboard__group-heading--backlog+.taskboard__list');
const boardProccesing = document.querySelector('.taskboard__group-heading--processing+.taskboard__list');
const boardDone = document.querySelector('.taskboard__group-heading--done+.taskboard__list');
const boardTrash = document.querySelector('.taskboard__group-heading--basket+.taskboard__list');

const btnClear = document.querySelector('.button--clear');




tasks.forEach((task) => {
  task.draggable = true;
  task.style.cursor = 'move';
});

taskBoards.forEach((taskBoard) => {
  taskBoard.addEventListener('dragstart', (evt) => {
    evt.target.classList.add('task--dragged');
  });

  taskBoard.addEventListener('dragend', (evt) => {
    evt.target.classList.remove('task--dragged');
  })

  taskBoard.addEventListener('dragover', (evt) => {
    evt.preventDefault();

    const activeTask = document.querySelector('.task--dragged');
    const currentTask = evt.target;

    if (evt.target.classList.contains('taskboard__item')) {
      
      const isMoveable = activeTask !== currentTask && currentTask.classList.contains(`taskboard__item`);
  
      if (!isMoveable) {
        return;
      }

      const nextElement = getNextElement(evt.clientY, currentTask);

      if (nextElement && activeTask === nextElement.previousElementSibling || activeTask === nextElement) {
        return;
      }
    
      taskBoard.insertBefore(activeTask, nextElement);

      if(taskBoard === boardBacklog) {
        activeTask.classList.remove('task--processing');
        activeTask.classList.remove('task--done');
        activeTask.classList.remove('task--basket');
      }

      if (taskBoard === boardProccesing) {
        activeTask.classList.remove('task--done');
        activeTask.classList.remove('task--basket');
        activeTask.classList.add('task--processing'); 
      }

      if (taskBoard === boardDone) {
        activeTask.classList.remove('task--processing');
        activeTask.classList.remove('task--basket');
        activeTask.classList.add('task--done');
      }

      if (taskBoard === boardTrash) {
        activeTask.classList.remove('task-processing');
        activeTask.classList.remove('task--done');
        activeTask.classList.add('task--basket');
      }
    
    } else {
      return;
    }
  });
});

tasks.forEach((task) => {
  task.addEventListener('dragleave', (evt) => {
    evt.preventDefault();

    if (boardProccesing.children.length === 1) {
      boardProccesing.querySelector('.task--empty').style.display = 'block';
    }

    if (boardDone.children.length === 1) {
      boardDone.querySelector('.task--empty').style.display = 'block';
    }

    if (boardTrash.children.length === 1) {
      boardTrash.querySelector('.task--empty').style.display = 'block';
    }
  });
});

tasks.forEach((task) => {
  task.addEventListener('dragenter', (evt) => {
    evt.preventDefault();

    if (boardProccesing.children.length > 1) {
      boardProccesing.querySelector('.task--empty').style.display = 'none';
    }

    if (boardDone.children.length > 1) {
      boardDone.querySelector('.task--empty').style.display = 'none';
    }

    if (boardTrash.children.length > 1) {
      boardTrash.querySelector('.task--empty').style.display = 'none';
      btnClear.disabled = false;
    }
  })
})

function getNextElement (cursorY, currentElement) {
  let nextElement;
    const currentElementCoord = currentElement.getBoundingClientRect();
    const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;

    if (cursorY < currentElementCenter) {
        nextElement = currentElement;
    } else {
        nextElement = currentElement.nextElementSibling;
    }
    return nextElement;
}
