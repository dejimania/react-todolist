import { sum, subt, mult, div } from './math';

let nsum = (a, b) => a + b;
let nsubt = (a, b) => a - b;
let nmult = (a, b) => a * b;
let ndiv = (a, b) => a / b;

test('Adding 1 + 1 equals 2', () => {
  expect(nsum(1,1)).toBe(2);
});

test('Subtracting 1 - 1 equal 0', () => {
  expect(nsubt(1,1)).toBe(0);
});

test('Multiplying 1 * 1 equals 1', () => {
  expect(nmult(1,1)).toBe(1);
});

test('Dividing 1 / 1 equals 1', () => {
  expect(ndiv(1,1)).toBe(1);
});