const addTask = (arr, description) => {
  arr.push({
    description,
    completed: false,
    index: (arr.length + 1),
  });
};

const removeTask = (arr, index) => {
  arr.splice(index, 1);
};

export { addTask, removeTask };