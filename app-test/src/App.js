
import './App.css';

function App() {
  const myList = [1,2,3,4,5];
  const declaVal = myList.map(a => a)
  return (
    <div className="App">
      <header className="App-header">
        {declaVal}
        <p>numbers</p>
      </header>
    </div>
  );
}

export default App;
