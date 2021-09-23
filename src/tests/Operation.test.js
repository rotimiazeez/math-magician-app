import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Calculator from '../components/Calculator';
import calculate from '../logic/calculate';
import operate from '../logic/operate';

beforeEach(() => {
  render(<Calculator />);
});
afterEach(cleanup);

describe('testing operations', () => {
  test('adding two numbers together', () => {
    const num1Btn = screen.getByText('8');
    const num2Dig1Btn = screen.getByText('1');
    const num2Dig2Btn = screen.getByText('8');
    const num2 = num2Dig1Btn.name + num2Dig2Btn.name;
    const operation = screen.getByText('+');
    expect(operate(num1Btn.name, num2, operation.name)).toBe('26');
  });

  test('subtracting two numbers from each other', () => {
    const num1Btn = screen.getByText('3');
    const num2Btn = screen.getByText('3');
    const operation = screen.getByText('-');
    expect(operate(num1Btn.name, num2Btn.name, operation.name)).toBe('0');
  });

  test('multiplying two numbers', () => {
    const num1Btn = screen.getByText('5');
    const num2Btn = screen.getByText('3');
    const operation = screen.getByText('x');
    expect(operate(num1Btn.name, num2Btn.name, operation.name)).toBe('15');
  });

  test('dividing two numbers', () => {
    const num1 = screen.getByText('6');
    const num2 = screen.getByText('2');
    const operation = screen.getByText('÷');
    expect(operate(num1.name, num2.name, operation.name)).toBe('3');
  });
});

describe('testing calculations', () => {
  test('dividing two numbers', () => {
    let obj = { total: null };
    obj = calculate(obj, '8');
    obj = calculate(obj, '÷');
    obj = calculate(obj, '2');
    obj = calculate(obj, '=');
    expect(obj.total).toEqual('4');
  });

  test('dividing by 0', () => {
    let obj = { total: null };
    obj = calculate(obj, '8');
    obj = calculate(obj, '÷');
    obj = calculate(obj, '0');
    obj = calculate(obj, '=');
    expect(obj.total).toMatch("Can't divide by 0.");
  });

  test('display nothing before operation is complete', () => {
    let obj = { total: null };
    obj = calculate(obj, '2');
    obj = calculate(obj, '1');
    obj = calculate(obj, '=');
    expect(obj.total).toEqual(undefined);
  });

  test('return null when user presses AC', () => {
    let obj = { total: null };
    obj = calculate(obj, '9');
    obj = calculate(obj, 'AC');
    expect(obj.total).toBeFalsy();
  });

  test('return decimal number', () => {
    let obj = { next: null };
    obj = calculate(obj, '1');
    obj = calculate(obj, '.');
    obj = calculate(obj, '5');
    expect(obj.next).toEqual('1.5');
  });
});
