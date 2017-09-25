import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>Prop number is : {this.propNumber}</h3>
        <h3>Prop string is : {this.propString}</h3>
        <Parent/>
      </div>
    );
  }
}
App.propTypes={

  propString:React.PropTypes.string,
  propNumber:React.PropTypes.number
}


App.defaultProps={
propNumber:3,
propString:"This is a string"


}


class Parent extends Component {
  constructor(props){
    super(props);

    this.state = {
      cars:['s-BMW','s-Audi','s-XUV']

    };
  }
  handleclick()
  {
    this.setState({cars: this.state.cars.reverse()});
  }
  render(){
    return(
      <div>
      <h2 onClick={this.handleclick.bind(this)}>Collection of cars</h2>
      <Cars msg="Hey there everyone" model="3450" coolCar={this.state.cars}/>
      </div>
    );
  }
}
Parent.defaultProps={
cars:['BMW','Audi','XUV']


}
class Cars extends Component {
  render(){
    return(
      <div>
        <h2>Child class</h2>
        <p>{this.props.msg}</p>
          <p>{this.props.model}</p>
            <p>{this.props.coolCar.map((item,i)=>{
              return " " +item;

            })}</p>
      </div>
    );
  }
}

export default App;
