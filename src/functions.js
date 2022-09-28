const addBook = (arr, description) => {
  arr.push({
    description,
    completed: false,
    index: (arr.length + 1),
  });
};

const removeBook = (arr, index) => {
  const q = index;
  arr.splice(q, 1);
};

export { addBook, removeBook };