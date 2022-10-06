function checkF(e, index, arr) {
  e = "true";
  if (e === "true") {
    e = false;
    arr[index].completed = false;
  } else {
    e = true;
    arr[index].completed = true;
  }
}

function updateItem(arr, index, e) {
  arr[index].description = e;
}

function clearF(arr) {
  const x = arr.filter((item) => !item.completed);
  return x;
}

export { checkF, updateItem, clearF };
