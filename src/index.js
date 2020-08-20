import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class Chalkboard extends Component {
  state = {
    chalk: "",
    notes: []
  };

  render() {
    var notes = this.state.notes.map((note) => <li> {note} </li>);
    //a different typle callback- defines the function in the variable itself
    //does not go back to a group of notes stored in an array
    //creates a one-line for each note string being stored
  }
}
