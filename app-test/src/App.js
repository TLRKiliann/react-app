import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

   increment = () => {
    const { count } = this.state;
    this.setState({count: count + 1});
    }

  decrement() {
    const { count } = this.state;
    this.setState({count: count - 1});
  }


  render() {
    const {
      count
    } = this.state;

    return (

      <div className="App">
        
        <div id="first--div">

          <button type="button" onClick={(e) => {this.increment(e)}}>
            +
          </button>

          <div id="second--div">
            {count}
          </div>

          <button onClick={(e) => {this.decrement(e)}}>
            -
          </button>

        </div>

        <CallFunction id="third--div" />

      </div>
    );
  }
}

const CallFunction = (props) => {

  return (

    <div id="func--div">
  
    </div>
  
  );
}

export default App;
