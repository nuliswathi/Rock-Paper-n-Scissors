import React, { Component } from 'react';

class GamePage extends Component {
        
    moveNum = 0;
    patternCheck = (event)  => {
        event.preventDefault();
        var user_pattern = document.getElementById("input_text").value;
        var comp_pattern = this.props.pattern;
        if(user_pattern === comp_pattern) {
            alert("You have guessed the right pattern hurray!!");
            return false;
        }
        else {
            alert("The pattern you entered is wrong!!");
            return false;
        }
    }
    checkWinner = (event) => {
    var user_value = event.target.value;
    var comp_value = this.props.compArray[this.moveNum];
    if(this.moveNum === this.props.compArray.length) {
        alert('You have completed all the moves');
            this.moveNum = 0;
            return;
        }
    if(user_value === comp_value) {
        alert("It is a draw both lost!!!");
    }
    else if((user_value === "Rock") && (comp_value === "Scissors")) {
        alert("Congrats!!! You Won");
    }
    else if((user_value === "Paper") && (comp_value === "Rock")) {
        alert("Congrats!!! You Won");
    }
    else if((user_value === "Scissors") && (comp_value === "Paper")) {
        alert("Congrats!!! You Won");
    }
    else {
        alert("You Lost, Computer Won");
    }
    this.moveNum++;
    }
    render() {
        return (
            <div>
                <h1>Welcome to Game Page</h1>
                <button className="welcome-button" value="Rock" onClick={this.checkWinner}>
                    <span class="icon rock"></span>
                </button><br></br>
                <br></br>  <button className="welcome-button" value="Paper" onClick={this.checkWinner}>
                    <span class="icon paper"></span>
                </button><br></br>
                <br></br>  <button className="welcome-button" value="Scissors" onClick={this.checkWinner}>
                    <span class="icon scissors"></span>
                </button><br></br>
                <form>
                    <input id="input_text" type="text" placeholder="Enter your pattern" required/>
                    <br></br><input class="welcome-button" type="submit" />
                </form>
            </div>
        )
    }
}

export default GamePage;