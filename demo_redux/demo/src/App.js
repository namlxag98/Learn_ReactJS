import React, { Component } from 'react';

class App extends Component {
  render() {
    var redux = require('redux');
    var oldState ={
      num: ["man hinh", "chuot","ban phim"],
      editStatus:true
    }
    var reducer1 = (state1=oldState,action1) => {
      switch (action1.type) {
        case "CHANGE_EDIT_STATUS":
          return {...state1,editStatus: !state1.editStatus};
        case "ADD_NEW":
          return {...state1,num:[...state1.num,action1.newItem]};  
        case "DELETE":
            return {...state1,num:state1.num.filter((value,key) => key !== action1.number)};  
        default:
          break;
      }
      //Dung de dat ten cho action
      return state1;
    }
    var store1 = redux.createStore(reducer1);
    //Khoi tao store
    store1.subscribe( ()=> {
      console.log(JSON.stringify(store1.getState()));
    })
    // console.log(store1.getState());
    store1.dispatch({type:"CHANGE_EDIT_STATUS"});
    //Goi de thuc thi action CHANGE_EDIT_STATUS
    // console.log(store1.getState());


    store1.dispatch({
      type:"ADD_NEW",
      newItem:"Tai Nghe"
    })
    // console.log(store1.getState());


    store1.dispatch({
      type:'DELETE',
      number:0

      
    })
    return (
      <div className="App">
        <header className="App-header">
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
    </div>
    );
  }
}

export default App;