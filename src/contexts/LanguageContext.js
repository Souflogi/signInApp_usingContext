import React, { Component, createContext } from "react";

export const LanguageContext = createContext();
export default class LanguageProvider extends Component {
  state = {
    language: "spanish"
  };

  shwitchLanguage = e => {
    this.setState({ language: e.target.value });
  };

  render() {
    return (
      <LanguageContext.Provider
        value={{ ...this.state, shwitchLanguage: this.shwitchLanguage }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}
