import { addTask } from './functions.js';

it('Add function test', () => {
  const arr = [];
  addTask(arr, 'string');
  expect(arr.length).toBe(1);
});