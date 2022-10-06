function checkF(e, index, arr) {
  if (e.value === 'true') {
    e.value = false;
    arr[index].completed = false;
  } else {
    e.value = true;
    arr[index].completed = true;
  }
}

function updateItem(arr, index, e) {
  arr[index].description = e.value;
}

function clearF(arr) {
  const x = arr.filter((item) => !item.completed);
  return x;
}

export { checkF, updateItem, clearF };