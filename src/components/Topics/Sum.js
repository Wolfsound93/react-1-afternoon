import React from 'react';
class Sum extends React.Component {
  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    };
  }

  updateNumber1 = val => {
    // this.setState({ number1: parseInt(val, 10) });
    this.setState({ number1: +val });
  };

  updateNumber2 = val => {
    // this.setState({ number2: parseInt(val, 10) });
    this.setState({ number2: +val });
  };

  add = (num1, num2) => {
    this.setState({ sum: num1 + num2 });
  };

  render() {
    const { number1, number2, sum } = this.state;
    return (
      <div className='puzzleBox sumPB'>
        <h4>Sum</h4>
        <input
          className='inputLine'
          type='number'
          onChange={e => this.updateNumber1(e.target.value)}
        />
        <input
          className='inputLine'
          type='number'
          onChange={e => this.updateNumber2(e.target.value)}
        />
        <button
          className='confirmationButton'
          onClick={() => this.add(number1, number2)}
        >
          Add
        </button>
        <span className='resultsBox'>Sum: {sum}</span>
      </div>
    );
  }
}

export default Sum;
