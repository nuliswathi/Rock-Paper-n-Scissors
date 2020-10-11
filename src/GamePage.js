import React, { Component } from 'react';

class GamePage extends Component {
        
    moveNum = 0;
    patternCheck = (event)  => {
        event.preventDefault();
        var user_pattern = document.getElementById("input_text").value;
        var comp_pattern = this.props.pattern;
        if(user_pattern === comp_pattern) {
            alert("You have guessed the right pattern!!");
        }
        else {
            alert("The pattern you entered is wrong!!");
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
        alert("It is a draw !!!");
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
                <button className="welcome-button" value="Rock" onClick={this.checkWinner}>Rock</button><br></br>
                <br></br><button className="welcome-button" value="Paper" onClick={this.checkWinner}>Paper</button><br></br>
                <br></br><button className="welcome-button" value="Scissors" onClick={this.checkWinner}>Scissors</button><br></br>
                <br></br><input type="text" id="input_text" placeholder="Enter your pattern" required/>
                <button type="submit" onClick={this.patternCheck}>Submit</button>
            </div>
        )
    }
}

export default GamePage;