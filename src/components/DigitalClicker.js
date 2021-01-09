import React, { Component } from "react";

class DigitalClicker extends Component {
  state = { timesClicked: 0 };

  handleOnClick = () => {
    this.setState((prevState) => {
      return { timesClicked: prevState.timesClicked + 1 };
    });
  };

  render() {
    return (
      <button onClick={this.handleOnClick}>{this.state.timesClicked}</button>
    );
  }
}

export default DigitalClicker;
