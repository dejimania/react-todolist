import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Button from './Counter';


class App extends Component {
  render () {
    return (
      <div className="App">
        <h4 className="bg-primary text-white text-center p-2">
          Todo List
        </h4>
        <Button></Button>
      </div>
    );
  }
}

export default App;
