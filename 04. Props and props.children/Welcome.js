import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return (
      <h1 className="container bg-danger text-white">{this.props.name} </h1>
    );
  }
}

export default Welcome;
