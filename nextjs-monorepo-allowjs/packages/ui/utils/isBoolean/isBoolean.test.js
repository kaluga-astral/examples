import { isBoolean } from './isBoolean';

describe('isBoolean', () => {
  it.each([true, false])('value %s is true', (value) => {
    expect(isBoolean(value)).toBeTruthy();
  });
});
