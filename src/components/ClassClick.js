import React, { Component } from 'react';

class ClassClick extends Component {
  clickHandler = () => {
    console.log('Class button click');
  };
  render() {
    return (
      <button className="btn btn-dark" onClick={this.clickHandler}>
        Class Click
      </button>
    );
  }
}

export default ClassClick;
