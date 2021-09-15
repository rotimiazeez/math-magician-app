import '../App.css';
import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <form>
          <input type="text" value="0" />
        </form>

        <div className="keypad">
          <button type="button">AC</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
          <button className="highlight" type="button">/</button>
          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button className="highlight" type="button">&times;</button>
          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button className="highlight" type="button">-</button>
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button className="highlight" type="button">+</button>
          <button className="bottom" type="button">0</button>
          <button className="bottomII" type="button">.</button>
          <button className="highlight bottomIII" type="button">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
