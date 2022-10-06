import { checkF, updateItem, clearF } from './functions2.js';

jest.mock('./functions2.js');

describe('Test the check, update and clear functions', () => {
  test('Check function test with true item', () => {
    const arr = [{ description: 'desc1', completed: true, index: 1 }];
    const e = 0;
    checkF(e, 0, arr);
    expect(arr[0].completed).toBe(false);
  });

  test('Check update item function', () => {
    const arr = [{ description: 'Hello', completed: true, index: 1 }];
    const e = 'bye';
    updateItem(arr, 0, e);
    expect(arr[0].description).toBe('bye');
  });

  test('Check update item function', () => {
    const arr = [{ description: 'Hello', completed: true, index: 1 }, { description: 'Florin', completed: true, index: 2 }];
    const e = 'David';
    updateItem(arr, 1, e);
    expect(arr[1].description).toBe('David');
  });

  test('Check update item function 1', () => {
    let arr = [{ description: 'Item1', completed: true, index: 1 }, { description: 'Item2', completed: true, index: 2 }, { description: 'Item3', completed: false, index: 3 }];
    arr = clearF(arr);
    expect(arr.length).toBe(1);
  });

  test('Check update item function all false', () => {
    let arr = [{ description: 'Item1', completed: false, index: 1 }, { description: 'Item2', completed: false, index: 2 }, { description: 'Item3', completed: false, index: 3 }];
    arr = clearF(arr);
    expect(arr.length).toBe(3);
  });

  test('Check update item function all true', () => {
    let arr = [{ description: 'Item1', completed: true, index: 1 }];
    arr = clearF(arr);
    expect(arr.length).toBe(0);
  });
});
