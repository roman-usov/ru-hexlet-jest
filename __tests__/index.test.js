import fill from '../src/index.js';
// import reverse from '../src/index.js';
//
// test('reverse', () => {
//   expect(reverse('hello')).toEqual('olleh1');
//   expect(reverse('')).toEqual('');
// })



describe('main flow scenarios', () => {
  let inputArr;

  beforeEach(() => {
    inputArr = [1, 2, 3, 4, 5, 6];
  })

  test('it should populate array with given value from start (inclusive) up to end (exclusive)', () => {
    const startIndex = 1;
    const endIndex = 4;
    const val = '*';
    const expectedResult = [1, '*', '*', '*', 5, 6];

    expect(fill(inputArr, val, startIndex, endIndex)).toEqual(expectedResult);
  });

  test('given no start and end, it should replace all elements with given value', () => {
    const val = '*';
    const expectedResult = ['*', '*', '*', '*', '*', '*'];

    expect(fill(inputArr, val)).toEqual(expectedResult);
  });

  test('given only start less than collection length, it should replace all elements with given value from start till the end of the collection', () => {
    const startIndex = 1;
    const val = '*';
    const expectedResult = [1, '*', '*', '*', '*', '*'];

    expect(fill(inputArr, val, startIndex)).toEqual(expectedResult);
  });
});

describe('alternative flow scenarios', () => {
  let inputArr;

  beforeEach(() => {
    inputArr = [1, 2, 3, 4, 5, 6];
  })

  test('given end greater than collection length, it should replace all elements with given value from start till the end of the collection', () => {
    const startIndex = 1;
    const endIndex = 10;
    const val = '*';
    const expectedResult = [1, '*', '*', '*', '*', '*'];

    expect(fill(inputArr, val, startIndex, endIndex)).toEqual(expectedResult);
  });

  test('given start greater than or equal to collection length, it should return collection as is', () => {
    const startIndex = 10;
    const val = '*';
    const expectedResult = [1, 2, 3, 4, 5, 6];

    expect(fill(inputArr, val, startIndex)).toEqual(expectedResult);
  });

  test('given negative start, it calculate new start based on collection length and replace elements starting from this new start', () => {
    const startIndex = -4;
    const endIndex = 4
    const val = '*';
    const expectedResult = [1, 2, '*', '*', 5, 6];

    expect(fill(inputArr, val, startIndex, endIndex)).toEqual(expectedResult);
  });

  test('given negative start and given new start based on collection length is still negative, it should replace elements starting from 0', () => {
    const startIndex = -10;
    const endIndex = 4
    const val = '*';
    const expectedResult = ['*', '*', '*', '*', 5, 6];

    expect(fill(inputArr, val, startIndex, endIndex)).toEqual(expectedResult);
  });

  test('given negative end and given new end based on collection length is greater than start, it should replace elements starting from start till new end', () => {
    const startIndex = 1;
    const endIndex = -1;
    const val = '*';
    const expectedResult = [1, '*', '*', '*', '*', 6];

    expect(fill(inputArr, val, startIndex, endIndex)).toEqual(expectedResult);
  });

  test('given negative end and given new end based on collection length is less than start, it should return the original collection', () => {
    const startIndex = 4;
    const endIndex = -4;
    const val = '*';
    const expectedResult = [1, 2, 3, 4, 5, 6];

    expect(fill(inputArr, val, startIndex, endIndex)).toEqual(expectedResult);
  });
});

describe('edge cases', () => {
  test('given empty collection, it should return the original collection', () => {
    const inputArr = [];
    const startIndex = 1;
    const endIndex = 4;
    const val = '*';
    const expectedResult = [];

    expect(fill(inputArr, val, startIndex, endIndex)).toEqual(expectedResult);
  });

  test('given no input value, it should return the original collection', () => {
    const inputArr = [1, 2, 3, 4, 5, 6];
    const expectedResult = [1, 2, 3, 4, 5, 6];

    expect(fill(inputArr)).toEqual(expectedResult);
  });
});
