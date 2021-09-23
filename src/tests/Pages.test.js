import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('pages test snapshots', () => {
  it('testing home page', () => {
    render(<App />);
    const Home = screen.getByText('Home');
    fireEvent.click(Home);
    expect(screen.getByText('Welcome to our page')).toMatchSnapshot();
  });
  it('testing Quote page', () => {
    render(<App />);
    const Quote = screen.getByText('Quotes');
    fireEvent.click(Quote);
    expect(screen.getByText('"We will always have STEM with us. Some things will drop out of the public eye and go away, but there will always be science, engineering, and technology. And there will always, always be mathematics". — Katherine Johnson, African-American mathematician')).toMatchSnapshot();
  });
  it('testing Calculator page', () => {
    render(<App />);
    const Calculator = screen.getByText('Calculator');
    fireEvent.click(Calculator);
    expect(screen.getByText('0')).toMatchSnapshot();
  });
});
