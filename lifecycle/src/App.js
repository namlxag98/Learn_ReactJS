import './App.css';
import React, { Component } from 'react';
import NoiDung from './NoiDung';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangthai: "khoitao"
    }
  }
  
  UNSAFE_componentWillMount() {
    console.log("componentwillmount run");
  }

  componentDidMount() {
    console.log("componentditmount runed");
    
  }


  shouldComponentUpdate (nextProps,nextState){
    console.log("shouldComponentUpdate run");
    return true;
    
  }
//Được kích hoạt khi gọi đến 1 pthuc cho phép cập nhật state lại state
//Có 2 gt, true(goi tiếp hàm will-render-did) và false(dừng))


  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate run");
    
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDillUpdate run");
    
  }
  
  capNhatState = () => {
    this.setState(
      {
        trangthai:"trang thai duoc update"
      }
    )
  }
  
  render() {
    console.log('Render run');
    console.log(this.state.trangthai);
    
    return (
      <div className="App">
        <NoiDung ten={this.state.trangthai}></NoiDung>
        <button onClick={() =>this.capNhatState()}>Click Update</button>
      </div>
    );
  }
}


export default App;
