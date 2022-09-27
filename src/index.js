import './style.css';

const toDoList = document.querySelector('.toDoList');
const tasks = [
  { description: 'grass cutting', completed: false, index: 1 },
  { description: 'grass cleaning', completed: false, index: 2 },
  { description: 'grass watering', completed: false, index: 3 },
];

tasks.forEach((task) => {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.value = task.completed;
  checkbox.id = 'tick';
  checkbox.classList = 'checkbox';

  const description = document.createElement('label');
  description.for = '#tick';
  description.innerText = task.description;

  const index = document.createElement('h3');
  index.innerText = task.index;
  index.className = 'index';

  const container = document.createElement('div');
  container.classList = 'flex border';
  container.append(checkbox, description, index);
  toDoList.append(container);
});