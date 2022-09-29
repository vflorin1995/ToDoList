import './style.css';
import { getStorage, updateStorage } from './LocalStorage.js';
import { addBook, removeBook } from './functions.js';

const toDoList = document.querySelector('.toDoList');
const inputList = document.querySelector('.input');

let tasklist = [];

const data = getStorage();
if (data) {
  tasklist = data;
}

const display = () => {
  toDoList.innerText = '';
  let indexValue = 1;
  tasklist.forEach((task) => {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = task.completed;
    checkbox.id = 'tick';
    checkbox.classList = 'checkbox';

    const editField = document.createElement('input');
    editField.className = 'editField';
    editField.value = task.description;

    const remove = document.createElement('div');
    remove.innerHTML = '<i class="fa-solid fa-trash"></i>';
    remove.className = 'remove';

    const index = document.createElement('h3');
    index.innerText = indexValue;
    tasklist.task = indexValue;
    index.className = 'index displayNone';
    indexValue += 1;

    const container = document.createElement('div');
    container.classList = 'flex border';
    container.append(checkbox, editField, remove, index);
    toDoList.append(container);
  });

  const closeBtn = Array.from(document.querySelectorAll('.remove'));
  closeBtn.forEach((element) => {
    element.addEventListener('click', () => {
      const z = closeBtn.indexOf(element);
      removeBook(tasklist, z);
      display();
    });
  });

  const editBtn = Array.from(document.querySelectorAll('.editField'));
  editBtn.forEach((element) => {
    const z = editBtn.indexOf(element);
    element.addEventListener('focusout', () => {
      if (element.value) {
        let obj = tasklist[z];
        obj.description = element.value;
      } else {
        removeBook(tasklist, z);
        display();
      }
    });
  });
  updateStorage(tasklist);
};

inputList.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    const q = inputList.value;
    addBook(tasklist, q);
    inputList.value = '';
    display();
  }
});

display();