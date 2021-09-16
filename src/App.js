import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div className="appContainer">
          <h1>Welcome, Math Magicians!</h1>
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;
