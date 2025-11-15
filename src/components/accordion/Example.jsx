import React, { Component } from "react";

export default class Example extends Component {
  data = { name: "John" };

  render() {
    return (
      <div>
        Example
        <p>my name is {this.data.name} </p>
      </div>
    );
  }
}
