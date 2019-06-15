import React, { Component } from "react";
import "./App.css";
import AppBar from "./components/AppBar/AppBar";
import "./components/AppBar/AppBar.css";
import Board from "./components/Board/Board";
import OpeningDialog from "./components/Modal/OpeningDialog";
import ClosingDialog from "./components/Modal/ClosingDialog";

export class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="App">
        <AppBar
          className="AppBar"
            onClick={() => {
            return this.props.gameData.play(this.props.gameData.numOfCardRows, this.props.gameData.numOfCardCols, "regular");
          }}
        />
        <Board gameData={this.props.gameData} />
        <OpeningDialog changeDifficulty={this.props.gameData.changeDifficulty} gameChoices={this.props.gameChoices}/>
        {/* <ClosingDialog setopen="true"/> */}
      </div>
    );
  }
}

export default App;
