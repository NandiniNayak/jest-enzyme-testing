import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state= {
    counter:0 
  }
  handleClick = () =>{
    this.setState((state) => ({
      counter: state.counter + 1
    }))
  }
  render(){
    // data-test attribute is used as selctors to target specific element
    return (
      <div data-test='component-app'>
        <h1 data-test='counter-display'> {this.state.counter}</h1>
        <button 
          data-test='button'
          onClick ={() => this.setState((state) => ({counter: state.counter + 1}))}
          >Click Me
          </button>
      </div>
    );
  }
}

export default App;
