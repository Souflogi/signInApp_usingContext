import React, { Component, createContext } from "react";

export const ThemeContext = createContext();
export class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkmode: true
    };
  }

  SwitchMode = () => {
    this.setState({ isDarkmode: !this.state.isDarkmode });
  };

  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state, Toggle: this.SwitchMode }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
