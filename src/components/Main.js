import React, { Component } from "react";
import { Link } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <h1>
        <Link to="/">Reduxtagram</Link>
      </h1>
    );
  }
}

export default Main;
