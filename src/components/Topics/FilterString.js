import React, { Component } from 'react';

export default class FilterString extends Component {
  constructor() {
    super();

    this.state = {
      states: [
        'NY',
        'NM',
        'OH',
        'IL',
        'PA',
        'TX',
        'GA',
        'CA',
        'AZ',
        'NV',
        'CO',
        'NC'
      ],
      userInput: '',
      filteredStates: []
    };
  }
  handleChange = val => {
    this.setState({ userInput: val });
  };

  filterStates = userInput => {
    let states = this.state.states;
    let filteredStates = [];

    for (let i = 0; i < states.length; i++) {
      if (states[i].includes(userInput)) {
        filteredStates.push(states[i]);
      }
    }
    this.setState({ filteredStates: filteredStates });
  };

  render() {
    return (
      <div className='puzzleBox filterStringPB'>
        <h4>Filter States</h4>
        <span className='puzzleText'></span>
        <input
          className='inputLine'
          onChange={e => this.handleChange(e.target.value)}
        />
        <button
          className='confirmationButton'
          onClick={() => this.filterStates(this.state.userInput)}
        >
          Filter
        </button>
        <span className='resultsBox filterStringRB'>
          Filtered States: {JSON.stringify(this.state.filteredStates, null, 10)}
        </span>
      </div>
    );
  }
}
