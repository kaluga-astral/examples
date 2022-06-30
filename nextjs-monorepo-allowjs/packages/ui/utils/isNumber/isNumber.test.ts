import { isNumber } from './isNumber';

describe('isNumber', () => {
  it.each<unknown>([22, NaN])('value %s is true', (value) => {
    expect(isNumber(value)).toBeTruthy();
  });
});
