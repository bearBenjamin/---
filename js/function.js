const removeClass = (tasks) => {
    tasks.forEach((item) => {
        item.classList.remove('task--active');
    });
}

const addClass = (item) => {  
    item.classList.add('task--active');
};

const createParagraf = () => {
    const paragraf = document.createElement('p');
    paragraf.classList.add('task__view');
    return paragraf;
};

const getParagraf = (event, input, item) => {
    event.preventDefault();
    const paragraf = createParagraf();
    input.setAttribute('value', input.value);
    paragraf.textContent = input.value;
    item.querySelector('.task__view').replaceWith(paragraf);
};

const exitEditing = (event, input, item) => {
    if (event.key === 'Enter') {
        input.blur();
        item.classList.remove('task--active');
    }
};

export { removeClass, addClass, getParagraf, exitEditing };