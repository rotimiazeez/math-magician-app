import '../App.css';
import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent = (e) => {
    e.preventDefault();
    this.setState((prev) => calculate(prev, e.target.name));
  }

  render() {
    const { total, next, operation } = this.state;
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
          <button type="button" onClick={this.handleEvent} name="AC">AC</button>
          <button type="button" onClick={this.handleEvent} name="+/-">+/-</button>
          <button type="button" onClick={this.handleEvent} name="%">%</button>
          <button type="button" onClick={this.handleEvent} name="÷" className="highlight">÷</button>
          <button type="button" onClick={this.handleEvent} name="7">7</button>
          <button type="button" onClick={this.handleEvent} name="8">8</button>
          <button type="button" onClick={this.handleEvent} name="9">9</button>
          <button type="button" onClick={this.handleEvent} name="x" className="highlight">x</button>
          <button type="button" onClick={this.handleEvent} name="4">4</button>
          <button type="button" onClick={this.handleEvent} name="5">5</button>
          <button type="button" onClick={this.handleEvent} name="6">6</button>
          <button type="button" onClick={this.handleEvent} name="-" className="highlight">-</button>
          <button type="button" onClick={this.handleEvent} name="1">1</button>
          <button type="button" onClick={this.handleEvent} name="2">2</button>
          <button type="button" onClick={this.handleEvent} name="3">3</button>
          <button type="button" onClick={this.handleEvent} name="+" className="highlight">+</button>
          <button type="button" onClick={this.handleEvent} name="0" className="bottom">0</button>
          <button type="button" onClick={this.handleEvent} name="." className="bottomII">.</button>
          <button type="button" onClick={this.handleEvent} name="=" className="highlight bottomIII">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
