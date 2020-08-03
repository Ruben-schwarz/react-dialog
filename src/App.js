import React, { Component } from "react";
import Dialog from "./components/dialog";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.updateAppState = this.updateAppState.bind(this);
  }
  updateAppState(stateObeject) {
    this.setState(stateObeject);
  }
  render() {
    return (
      <div className="App">
        <button onClick={(e) => this.setState({ isOpen: true })}>
          open dia
        </button>
        <Dialog updateAppState={this.updateAppState} isOpen={this.state.isOpen}>
          Dolor aliqua sint cillum sint eu ad consequat dolore. Labore magna ea
          deserunt eiusmod aliqua mollit cupidatat veniam id eu et sint.
          Pariatur non est id Lorem id aute consequat quis eu. Amet ex id do qui
          ea dolore et pariatur mollit eu esse. Lorem minim laborum est nulla
          nostrud consectetur Lorem aliqua. Ad ea tempor enim pariatur.
        </Dialog>
      </div>
    );
  }
}

export default App;
