const getStorage = () => {
  const localdata = localStorage.getItem('localdata');
  const dataStored = JSON.parse(localdata);
  return dataStored;
};

const updateStorage = (obj) => {
  const localdata = JSON.stringify(obj);
  localStorage.setItem('localdata', localdata);
};

export { getStorage, updateStorage };