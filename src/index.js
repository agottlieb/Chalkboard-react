import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class Chalkboard extends Component {
  state = {
    chalk: "",
    notes: []
  };

  updateChalk = (event) => {
    this.setState({ chalk: event.target.value });
  };

  updateNotes = (event) => {
    event.PreventDefault();
    var newNotes = this.state.notes.slice();
  };
  render() {
    var notes = this.state.notes.map((note) => <li> {note} </li>);
    //a different typle callback- defines the function in the variable itself
    //does not go back to a group of notes stored in an array
    //creates a one-line for each note string being stored
    return (
      <div className="App">
        <form>
          <input type="text" placeholder="type here" value={this.state.chalk} />
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
