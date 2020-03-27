import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { TodoBanner } from './TodoBanner';
import { TodoCreator } from './TodoCreator';
import { TodoRow } from './TodoRow';
import { VisibilityControl } from './VisibilityControl';

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
      showCompleted: true,
    };
  }

  updateNewTextValue = (evt) => {
    this.setState({ newItemText: evt.target.value });
  }

  createNewTodo = (task) => {
    if(!this.state.todoItems.find(item => this.state.newItemText === task)){
      this.setState({
        todoItems: [ ...this.state.todoItems,
          { action: task, done: false },
        ],
      });
    }
  }

 
  toggleTodo = (todo) => {
    return this.setState({
      todoItems: this.state.todoItems.map(item => item.action === todo.action ?
        { ...item, done: !item.done } : item )
    });
  }

  todoTableRows = (doneValue) => {
    return this.state.todoItems
      .filter(item => item.done === doneValue)
      .map(item => 
        <TodoRow key={item.action} item={ item } callback={ this.toggleTodo} />);
  }



  changeStateData = () => {
    this.setState({
      userName: this.state.userName === 'Idrees' ? 'Aliza' : 'Idrees',
    });
  }
  render () {
    return (
      <div className="App">
        <TodoBanner name={ this.state.userName } tasks={ this.state.todoItems } />
        
        <div className="container-fluid">
          <TodoCreator callback={ this.createNewTodo } />
          {/* <div className="my-1">
            <input className="form-control"
            value={ this.state.newItemText }
            onChange={ this.updateNewTextValue }
            />
            <button className="btn btn-primary mt-1"
              onClick={ this.createNewTodo }
            >Add</button>
          </div> */}
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Description</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>{ this.todoTableRows(false) }</tbody>
          </table>
          <div className="bg-secondary text-center text-white p-2">
            <VisibilityControl
              description="Completed Tasks"
              isChecked={ this.state.showCompleted }
              callback={ (checked) => this.setState({ showCompleted: checked })}
            />
            {
              this.state.showCompleted &&
              <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Done</th>
                </tr>
              </thead>
              <tbody>{ this.todoTableRows(true) }</tbody>
            </table> 
            }
          </div>
        </div>
        
        {/* <Button></Button> */}
      </div>
    );
  }
}

export default App;
