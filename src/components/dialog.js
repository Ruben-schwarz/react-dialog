import React, { Component } from "react";

class Dialog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    let isOpen = this.props.isOpen;
    isOpen = !isOpen;
    this.props.updateAppState({ isOpen });
  }
  render() {
    return (
      <div>
        {this.props.isOpen ? (
          <div className="dialog">
            <button onClick={this.handleClick} className="dialogBtn">
              &times;
            </button>
            {this.props.children}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Dialog;
