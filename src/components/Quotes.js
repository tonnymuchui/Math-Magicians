import React, { Component } from 'react';
import './Calculator.css';

class Quotes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <p className="Description-q">
          Mathematics is not about numbers, equations, computations, or algorithms:
          it is about understanding. -William Paul Thurston
        </p>
      </div>
    );
  }
}
export default Quotes;
