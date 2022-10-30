import reverse from '../src/index.js';

test('reverse', () => {
  expect(reverse('hello')).toEqual('olleh1');
  expect(reverse('')).toEqual('');
})
