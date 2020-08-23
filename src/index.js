import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class Chalkboard extends Component {
  state = {
    chalk: "",
    notes: []
  };
  //event handler for updating chalk
  updateChalk = (event) => {
    this.setState({ chalk: event.target.value });
  };
  //update handler for update notes
  updateNotes = (event) => {
    //prevents refresh
    event.preventDefault();
    //makes copy of current array
    var newNotes = this.state.notes.slice();
    //adds current chalk message to the notes
    newNotes.push(this.state.chalk);
    //resets the chalk state to an empty field
    this.setState({
      chalk: "",
      notes: newNotes
    });
  };
  //lifecyle update to save previous session to browser history
  componentDidUpdate() {
    var stateString = JSON.stringify(this.state);
    localStorage.setItem("stateString", stateString);
  }
  render() {
    //a different type callback- defines the function in the variable itself
    //does not go back to a group of notes stored in an array
    //creates a one-line for each note string being stored
    var notes = this.state.notes.map((note) => <li> {note} </li>);
    return (
      <div className="App">
        <form onSubmit={this.updateNotes}>
          <input
            type="text"
            placeholder="type here"
            value={this.state.chalk}
            /*event listener for chalk section*/
            onChange={this.updateChalk}
          />
          <input type="submit" />
        </form>
        <div className="board">
          <h1 className="chalk">{this.state.chalk} </h1>
        </div>
        <ul className="notes"> {notes} </ul>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Chalkboard />, rootElement);
