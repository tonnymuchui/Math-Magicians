import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Calculator from './Calculator';
import Home from './Home';
import Header from './Navbar';
import Quotes from './Quotes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/" element={<Home />} />
          <Route path="/Quotes" element={<Quotes />} />
        </Routes>
      </Router>
    );
  }
}
export default App;
