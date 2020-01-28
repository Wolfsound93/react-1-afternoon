import React, { Component } from 'react';
export default class Palindrome extends Component {
  constructor() {
    super();

    this.state = {
      userInput: '',
      palindrome: ''
    };
  }
  handleChange = e => {
    this.setState({ userInput: e });
  };

  isPalindrome = userInput => {
    let forward = userInput;
    let backward = userInput;
    backward = backward.split('');
    backward = backward.reverse();
    backward = backward.join('');

    if (forward === backward) {
      this.setState({ palindrome: 'true' });
    } else {
      this.setState({ palindrome: 'false' });
    }
  };

  render() {
    const { userInput, palindrome } = this.state;
    return (
      <div className='puzzleBox filterStringPB'>
        <h1>Palindrome</h1>
        <input
          className='inputLine'
          onChange={e => this.handleChange(e.target.value)}
        />
        <button
          className='confirmationButton'
          onClick={() => this.isPalindrome(userInput)}
        ></button>
        <span className='resultsBox'>Palidrome: {palindrome}</span>
      </div>
    );
  }
}
