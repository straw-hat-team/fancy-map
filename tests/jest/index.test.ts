import { FancyMap } from '../../src/index';

test('sets the value properly', () => {
  const cb = jest.fn(() => 123);
  const map = new FancyMap();
  expect(map.getOrSet('key', cb)).toBe(123);
  expect(cb).toBeCalledWith('key');
});

test('sets the value once', () => {
  const cb = jest.fn(() => 123);
  const map = new FancyMap();
  expect(map.getOrSet('key', cb)).toBe(123);
  expect(cb).toBeCalledTimes(1);
});
