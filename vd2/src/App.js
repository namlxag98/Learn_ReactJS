import React,{Component} from 'react';
import './App.css';

//Cach1
var Khung =(props) =>{
  return (
    <div className= "col-6">
      <div className="card">
        <img className="card-img-top" src={props.linkanh} alt=""/>
        <div className="card-body">
           <h4 className="card-title">{props.title}</h4>
          <p className="card-text">{props.text}</p>
        </div>
      </div>
    </div>
  )
}

//Cach2
class Khung2 extends Component{
  render(){
    return(
      <div className= "col-6">
        <div className="card-body">
            <h4 className="card-title">{this.props.title}</h4>
            <p className="card-text">{this.props.text}</p>
        </div>
        <div className="card">
          <img className="card-img-bottom" src={this.props.linkanh} alt=""/>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Khung linkanh="https://znews-photo.zadn.vn/w1024/Uploaded/ryksdreyxq/2019_09_27/188825927499575imagea149_1569347858556_thumb.jpg" title="Thời trang" text="Công nương Meghan Markle được khen ngợi khi mặc lại hai bộ váy cũ"></Khung>
          <hr/>
          <Khung2 linkanh="https://znews-photo.zadn.vn/w1024/Uploaded/fcivbqmv/2019_09_26/galaxyTabs6_zing8.jpg" title="Công nghệ" text="ĐÁNH GIÁ GALAXY TAB S6"></Khung2>
          
        </div>
      </div>
    </div>
  );
}

export default App;
