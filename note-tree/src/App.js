import logo from './logo.svg';
import './App.css';

function App() {

  function clickhandler(){
    console.log("hello")
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>welcome to noteTree</h1>
        <button onClick={clickhandler}>hello hello</button>
      </header>
    </div>
  );
}

export default App;
