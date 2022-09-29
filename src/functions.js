const addTask = (arr, description) => {
  arr.push({
    description,
    completed: false,
    index: (arr.length + 1),
  });
};

const removeTask = (arr, index) => {
  const q = index;
  arr.splice(q, 1);
};

export { addTask, removeTask };