import React from 'react';
import './App.css';


// Two manner to call buttons from differents components.

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this);
    // decrement don't need to be bind !
    //this.decrement = this.decrement.bind(this);
  }

  increment = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  }

  decrement = () => {
    const { count } = this.state;
    this.setState({ count: count - 1 });
  }

  render() {
    const {
      count
    } = this.state;

    const someStuff = {
      title: "My Test",
      name: "Juda",
      // this decrement is called from here !
      decrease: (this.decrement)
    };

    return (

      <div className="App">
        
        <div id="first--div">

          <button type="button" onClick={this.increment}>
            +
          </button>

          <div id="second--div" title="Display">
            Counter: {count}
          </div>

          <CallFunction id="third--div" {...someStuff} />

        </div>

      </div>
    );
  }
}

const CallFunction = (props) => {

  const id = props.title.toLowerCase()
  const legendary = props.name.toUpperCase();

  // props decrese is called from here
  return (
    <div id="func--div">

      <h2 id={`${id}-for ever`} >{`${id}-${props.title}`}</h2>
      {`${legendary}-${props.name}`}

      <button type="button" onClick={props.decrease}>
        -
      </button>

    </div>

  );
}

export default App;
