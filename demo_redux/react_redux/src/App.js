import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import News from './News';
import {connect} from 'react-redux';
class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {this.prop.dulieu}
      <News/>
    </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    dulieu: state.num
  }
}
//co this.props.dulieu

export default connect(mapStateToProps)(App);
