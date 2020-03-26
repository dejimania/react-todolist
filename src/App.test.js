import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';


test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('App button works', () => {
  const { container } = render(<App />);
  console.log(container);
  const button = container.querySelectorAll('button');

  expect(button[0].textContent).toBe('+1');
  expect(button[1].textContent).toBe('+10');
  expect(button[2].textContent).toBe('+100');
  expect(button[3].textContent).toBe('+1000');

  const result = container.querySelector('span');
  expect(result.textContent).toBe('0');
  fireEvent.click(button[0]);
  expect(result.textContent).toBe('1');
  fireEvent.click(button[1]);
  expect(result.textContent).toBe('11');
  fireEvent.click(button[2]);
  expect(result.textContent).toBe('111');
  fireEvent.click(button[3]);
  expect(result.textContent).toBe('1111');
  fireEvent.click(button[2]);
  expect(result.textContent).toBe('1211');
  fireEvent.click(button[1]);
  expect(result.textContent).toBe('1221');
  fireEvent.click(button[0]);
  expect(result.textContent).toBe('1222');
});
