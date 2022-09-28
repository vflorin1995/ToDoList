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

    const description = document.createElement('h3');
    description.className = 'description';
    description.innerText = task.description;

    const editField = document.createElement('input');
    editField.className = 'editField displayNone';
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
    container.append(checkbox, description, editField, remove, index);
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

  const editBtn = Array.from(document.querySelectorAll('.description'));
  editBtn.forEach((element) => {
    let editableText;
    element.addEventListener('click', () => {
      element.classList.add('displayNone');
      editableText = element.nextSibling;
      editableText.classList.remove('displayNone');

      editableText.addEventListener('focusout', () => {
        if (editableText.value) {
          element.innerText = editableText.value;
          editableText.classList.add('displayNone');
          element.classList.remove('displayNone');
        } else {
          const z = editBtn.indexOf(element);
          removeBook(tasklist, z);
          display();
        }
      });
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