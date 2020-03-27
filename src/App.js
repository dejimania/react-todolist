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
      todoItems: [
        { action: "Buy Flowers", done: false },
        { action: "Do Morning Duty", done: false },
        { action: "Do School Assignment", done: true },
        { action: "Call mum", done: false },
      ],
      newItemText: "",
    };
  }

  updateNewTextValue = (evt) => {
    this.setState({ newItemText: evt.target.value });
  }

  createNewTodo = () => {
    if(!this.state.todoItems
        .find(item => item.action === this.state.newItemText)) {
        this.setState({
          todoItems: [...this.state.todoItems,
            { action: this.state.newItemText, done: false}],
          newItemText: "",
        });
    }
  }

  toggleTodo = (todo) => {
    return this.setState({
      todoItems: this.state.todoItems.map(item => item.action === todo.action ?
        { ...item, done: !item.done } : item )
    });
  }

  todoTableRows = () => {
    return this.state.todoItems.map(item => {
       return <tr key={item.action}>
        <td>{item.action}</td>
        <td>
          <input type="checkbox" checked={item.done}
            onChange={ () => this.toggleTodo(item) }
          />
        </td>
      </tr>;
    });
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
          ({ this.state.todoItems.filter(t => !t.done).length} items to do) | 
          { this.state.todoItems.filter(t => t.done).length} item done
        </h4>
        {/* <button className="btm btn-primary m-2" onClick={this.changeStateData}>
          Change
        </button> */}
        <div className="container-fluid">
          <div className="my-1">
            <input className="form-control"
            value={ this.state.newItemText }
            onChange={ this.updateNewTextValue }
            />
            <button className="btn btn-primary mt-1"
              onClick={ this.createNewTodo }
            >Add</button>
          </div>
          <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>{ this.todoTableRows() }</tbody>
        </table>
        </div>
        
        {/* <Button></Button> */}
      </div>
    );
  }
}

export default App;
