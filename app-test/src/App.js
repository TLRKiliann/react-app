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
      title: "My test",
      name: "Juda",
      decrease: (e) => {this.decrement(e)}
    };

    return (

      <div className="App">
        
        <div id="first--div">

          <button type="button" onClick={(e) => {this.increment(e)}}>
            +
          </button>

          <div id="second--div" title="Display">
            {count}
          </div>

        </div>

        <CallFunction id="third--div" {...someStuff} />

      </div>
    );
  }
}

const CallFunction = (props) => {

  const id = props.title.toLowerCase()
  const legendary = props.name.toUpperCase();

  return (
    <div id="func--div">

      <h2 id={`${id}-for ever`}>{`${id}-props.title`}</h2>
      {`${legendary}-props.name`}

      <button type="button" onClick={(e) => {props.decrease(e)}}>
        -
      </button>

    </div>

  );
}

export default App;
