import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
  constructor() {
    super();

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ''
    };
  }

  handleClick = () => {
    let arr = this.state.userInput.split(',');

    let evenArray = [];
    let oddArray = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evenArray.push(arr[i]);
      } else {
        oddArray.push(arr[i]);
      }
    }
    console.log(evenArray, oddArray);

    this.setState({
      evenArray: evenArray,
      oddArray: oddArray
    });
  };

  handleChange = e => {
    this.setState({
      userInput: e.target.value
    });
    console.log(e.target.value);
  };

  render() {
    return (
      <div className='puzzleBox evenAndOddPB'>
        <h4> Evens and Odds </h4>
        <input className='inputLine' onChange={this.handleChange} />
        <button className='confirmationButton' onClick={this.handleClick}>
          Split
        </button>
        <span className='resultBox'>
          Evens : {JSON.stringify(this.state.evenArray)}
        </span>
        <span className='resultBox'>
          Odds : {JSON.stringify(this.state.oddArray)}
        </span>
      </div>
    );
  }
}
