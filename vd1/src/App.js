import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

function Nam(){
  return <div>Cach 1</div>;
}

var ExAnonymous= function (){
  return <div>Cach 2</div>;
}

var Exes6 = ()=>
   <div>Cach 3</div>

class Four extends Component {
  render() {
    return (
      <div>
        <button>Cach 4</button>
      </div>
    );
  }
}
   
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Nam/>
        <ExAnonymous/>
        <Exes6/>
        <h1> Welcome React</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <hr/>
      <Four/> 
    </div>
  );
}


export default App;
