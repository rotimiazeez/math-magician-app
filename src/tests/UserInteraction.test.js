import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';

beforeEach(() => {
  render(<App />);
});
afterEach(cleanup);

describe('user interaction', () => {
  test('Home in the App', () => {
    const Home = screen.getByText('Home');
    expect(Home).toBeInTheDocument();
  });
  test('Quote in the App', () => {
    const Quote = screen.getByText('Quotes');
    expect(Quote).toBeInTheDocument();
  });
  test('Home in the App', () => {
    const Calculator = screen.getByText('Calculator');
    expect(Calculator).toBeInTheDocument();
  });
});
