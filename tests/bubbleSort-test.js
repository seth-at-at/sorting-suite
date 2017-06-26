import {bubbleSort} from '../scripts/bubbleSort.js'

describe('Bubble Sort Functionality', () => {

  it('should be a function', () => {
    assert.isFunction(bubbleSort);
  });

  it('should sort an array of numbers', () =>{
    let numArray = [8, 4, 16, 15]

    assert.deepEqual(bubbleSort(numArray), [4, 8, 15, 16]);
  });

  it('should sort a different array of numbers', () =>{
    let numArray = [10, 18, 4, 50, 25, 40, 1, 18]

    assert.deepEqual(bubbleSort(numArray), [1, 4, 10, 18, 18, 25, 40, 50]);
  });

});
