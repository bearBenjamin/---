import { removeClass, addClass, getParagraf, exitEditing } from "./function.js";

const taskBoard = document.querySelector('.taskboard__list');
const taskBoards = taskBoard.querySelectorAll('.taskboard__item');

const taskSorted = document.querySelector('.taskboard__list--sorted');
const taskSorteds = taskSorted.querySelectorAll('.task--processing');

const taskDone = document.querySelector('.taskboard__group-heading--done+.taskboard__list--sorted');
const taskDones = taskDone.querySelectorAll('.task--done');

const taskTrash = document.querySelector('.taskboard__list--trash');
const taskTrashs = taskTrash.querySelectorAll('.task--basket');

taskBoards.forEach((item) => {
    item.addEventListener('click', event => newTaskBacklogClickHandler(event, item));   
});

const newTaskBacklogClickHandler = (evt, item) => {
    const input = item.querySelector('.task__input');
    
    if (evt.target.classList.contains('task__edit')) {
        removeClass(taskBoards);
        addClass(item);
        input.focus();
    } else {
        return;
    }

    input.addEventListener('change', event => getParagraf(event, input, item));

    input.addEventListener('keydown', event => exitEditing(event, input, item));
};

taskSorteds.forEach((item) => {
    item.addEventListener('click', event => newTaskProcessingClickHandler(event, item));
});

const newTaskProcessingClickHandler = (evt, item) => {
    const input = item.querySelector('.task__input');

    if (evt.target.classList.contains('task__edit')) {
        removeClass(taskSorteds);
        addClass(item);
        input.focus();
    } else {
        return;
    }

    input.addEventListener('change', event => getParagraf(event, input, item));

    input.addEventListener('keydown', event => exitEditing(event, input, item));
};

taskDones.forEach((item) => {
    item.addEventListener('click', event => newTaskDoneClickHandler(event, item));
});

const newTaskDoneClickHandler = (evt, item) => {
    const input = item.querySelector('.task__input');

    if (evt.target.classList.contains('task__edit')) {
        removeClass(taskDones);
        addClass(item);
        input.focus();
    } else {
        return;
    }

    input.addEventListener('change', event => getParagraf(event, input, item));

    input.addEventListener('keydown', event => exitEditing(event, input, item));
};

taskTrashs.forEach((item) => {
    item.addEventListener('click', event => newTaskTrashClickHandler(event, item));
});

const newTaskTrashClickHandler = (evt, item) => {
    const input = item.querySelector('.task__input');

    if (evt.target.classList.contains('task__edit')) {
        removeClass(taskTrashs);
        addClass(item);
        input.focus();
    } else {
        return;
    }
    
    input.addEventListener('change', event => getParagraf(event, input, item));

    input.addEventListener('keydown', event => exitEditing(event, input, item));
};
