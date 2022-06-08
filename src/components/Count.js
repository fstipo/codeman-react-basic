import React, { Component } from 'react';

class Count extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    // Ako želimo da odmah nakon setState iskoristimo tu vrijednost
    //     this.setState(
    //       {
    //         count: this.state.count + 1,
    //       },
    //       () => {
    //         console.log('Callback value:' + this.state.count);
    //       }
    //     );

    // Ako stanje ovisi o prethodnom stanju
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));

    console.log(this.state.count);
  }

  increment5() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <>
        <div>Count: {this.state.count}</div>
        <button className="btn btn-dark" onClick={() => this.increment5()}>
          Increment
        </button>
      </>
    );
  }
}

export default Count;
