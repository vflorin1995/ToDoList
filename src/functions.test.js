import { addTask, removeTask } from './functions.js';

describe('Test the add and remove functions', () => {
  test('Add function test', () => {
    const arr = [];
    addTask(arr, 'string');
    expect(arr.length).toBe(1);
  });

  test('Remove function test', () => {
    const arr = [{ a: 1 }, { b: 2 }, { c: 3 }];
    removeTask(arr, 1);
    expect(arr.length).toBe(2);
  });
});
