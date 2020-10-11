import React, { Component } from 'react';

class WelcomePage extends Component {
   
    changeState() {
        this.props.displayPage();
    }
    render() {
      return (
        <div className="welcome"> 
          <h2>ROCK PAPER SCISSORS</h2>
          <button className="welcome-button" onClick={()=>this.changeState()}>Click to Play</button>
        </div>
      );
    }
  } 

  export default WelcomePage;