import React, { Component } from 'react';
import WelcomePage from './Welcome.js';
import './App.css';
import GamePage from './GamePage.js';

class App extends Component {
  compArray = ["Rock","Rock","Scissors","Paper"];
  pattern = '';
  state = {
    page : false,
  }
  createPattern() {
    for(var i = 0; i < this.compArray.length;i++) {
      this.pattern = this.pattern + this.compArray[i].charAt(0);
    }
  }
  displayPage() {
    this.createPattern();
    this.setState({
      page : true,
    })
  }
  render() {
    const temp = this.state.page ? <GamePage pattern={this.pattern} compArray={this.compArray}/> : <WelcomePage displayPage={()=>this.displayPage()}/> 
    return (
      <div>
        {temp}
      </div>
    );
  }
}

export default App;