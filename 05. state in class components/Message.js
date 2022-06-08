import React, { Component } from 'react';

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Welcome friend 😉',
    };
  }
  changeMessage() {
    this.setState({
      message: 'Thank you for subscribe 👍',
    });
  }

  render() {
    return (
      <>
        <h1 className="container bg-danger text-white">{this.state.message}</h1>
        <button className="btn" onClick={() => this.changeMessage()}>
          Subscribe
        </button>
      </>
    );
  }
}

export default Message;
