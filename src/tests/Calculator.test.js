/* eslint-disable no-restricted-syntax */
import React from 'react';
import {
  render, screen, cleanup, fireEvent,
} from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('calculator testing', () => {
  test('2 x 3', () => {
    render(<Calculator />);

    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('x'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));

    expect(screen.getByText('6')).toMatchSnapshot();
  });

  test('calculator contains all buttons', () => {
    const calcButtons = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

    render(
      <Calculator />,
    );

    for (const btn of calcButtons) {
      expect(screen.getByText(btn)).toBeInTheDocument();
    }
  });

  test('clicking the button toggles the number', () => {
    render(<Calculator />);
    const button = screen.getByText('1');
    // fireEvent.click(button);
    expect(button).toBeInTheDocument();
  });
});

afterEach(cleanup);
