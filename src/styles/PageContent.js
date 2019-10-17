import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeProvider";
export default class PageContent extends Component {
  static contextType = ThemeContext;

  render() {
    const { isDarkmode } = this.context;
    const Styles = {
      backgroundColor:isDarkmode ? "black" : "white",
      height: "100vh",
      width: "100vw"
    };

    return <div style={Styles}>{this.props.children}</div>;
  }
}
