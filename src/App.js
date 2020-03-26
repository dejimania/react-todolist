import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Button from './Counter';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: "Idrees",
    };
  }

  changeStateData = () => {
    this.setState({
      userName: this.state.userName === 'Idrees' ? 'Aliza' : 'Idrees',
    });
  }
  render () {
    return (
      <div className="App">
        <h4 className="bg-primary text-white text-center p-2">
          { this.state.userName }'s Todo List
        </h4>
        <button className="btm btn-primary m-2" onClick={this.changeStateData}>
          Change
        </button>
        <Button></Button>
      </div>
    );
  }
}

export default App;
