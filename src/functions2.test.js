import { checkF, updateItem, clearF } from './functions2.js';

jest.mock('./functions2.js');

describe('Test the check, update and clear functions', () => {
  test('Check function test with true item', () => {
    const arr = [{ completed: true }];
    const e = 0;
    checkF(e, 0, arr);
    expect(arr[0].completed).toBe(false);
  });
});