import '../App.css';
import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calculation, setCalculation] = useState({ total: 0, next: null, operation: null });
  const { next, total, operation } = calculation;

  const handleEvent = (e) => {
    e.preventDefault();
    setCalculation((prev) => calculate(prev, e.target.name));
  };

  const showTotal = () => {
    if (total === 0 && next === null) {
      return 0;
    }

    if (total !== 0 && total !== null) {
      return total;
    }
    return '';
  };
  return (
    <div className="container">
      <form>
        <input type="text" id="result" value={(showTotal()) + (operation || '') + (next || '')} disabled />
      </form>

      <div className="keypad">
        <button type="button" onClick={handleEvent} name="AC">AC</button>
        <button type="button" onClick={handleEvent} name="+/-">+/-</button>
        <button type="button" onClick={handleEvent} name="%">%</button>
        <button type="button" onClick={handleEvent} name="÷" className="highlight">÷</button>
        <button type="button" onClick={handleEvent} name="7">7</button>
        <button type="button" onClick={handleEvent} name="8">8</button>
        <button type="button" onClick={handleEvent} name="9">9</button>
        <button type="button" onClick={handleEvent} name="x" className="highlight">x</button>
        <button type="button" onClick={handleEvent} name="4">4</button>
        <button type="button" onClick={handleEvent} name="5">5</button>
        <button type="button" onClick={handleEvent} name="6">6</button>
        <button type="button" onClick={handleEvent} name="-" className="highlight">-</button>
        <button type="button" onClick={handleEvent} name="1">1</button>
        <button type="button" onClick={handleEvent} name="2">2</button>
        <button type="button" onClick={handleEvent} name="3">3</button>
        <button type="button" onClick={handleEvent} name="+" className="highlight">+</button>
        <button type="button" onClick={handleEvent} name="0" className="bottom">0</button>
        <button type="button" onClick={handleEvent} name="." className="bottomII">.</button>
        <button type="button" onClick={handleEvent} name="=" className="highlight bottomIII">=</button>
      </div>
    </div>
  );
};

export default Calculator;
