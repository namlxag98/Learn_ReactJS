
import './App.css';
import { firebaseConnect } from './firebaseConnect';
import * as firebase from 'firebase';
import React, { Component } from 'react';

class App extends Component {
  pushData = () => {
    var connectData =firebase.database().ref('/');
    //id tu sinh ra
    connectData.push({
      noteContent:"Day la note 4",
      title: "Note 4"
    })
    console.log("Da them");
  }
  render() {
    return (
      <div>
        <button onClick={()=> this.pushData()}>Click them moi bang push</button>
      </div>
    );
  }
}

export default App;