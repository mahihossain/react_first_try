import React, { Component } from "react";
import "./App.css";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

class App extends Component {
  state = {
    userInput: ''
  };

  takeInput = event => {
    this.setState({ userInput: event.target.value });
  };

  deleteCharacterHandler = characterIndex => {
    const text = this.state.userInput.split('');
    text.splice(characterIndex, 1);
    const updatedText = text.join('');
    this.setState({ userInput: updatedText });
  };

  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char 
        character={ch} 
        key={index}
        clicked={() => this.deleteCharacterHandler(index)} />;
    });

    return (
      <div className="App">
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.takeInput}
        />
        <p>{this.state.userInput.length}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
