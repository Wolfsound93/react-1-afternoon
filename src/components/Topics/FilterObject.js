import React, { Component } from 'react';
class FilterObject extends Component {
  constructor() {
    super();

    this.state = {
      cars: [
        {
          make: 'Toyota',
          model: 'Rav-4',
          year: 1996
        },
        {
          make: 'Honda',
          model: 'Pilot',
          milage: 112600
        },
        {
          make: 'Mercedes',
          color: 'red'
        }
      ],
      userInput: '',
      filteredArr: []
    };
  }

  handleChange = val => {
    this.setState({ userInput: val });
  };

  filterCars = prop => {
    let cars = this.state.cars;
    let filteredArr = [];

    for (let i = 0; i < cars.length; i++) {
      if (cars[i].hasOwnProperty(prop)) {
        filteredArr.push(cars[i]);
      }
    }
    this.setState({ filteredArr: filteredArr });
  };

  render() {
    return (
      <div className='puzzleBox filterObjectPB'>
        <h4>Filter Object</h4>
        <span className='puzzleText'>
          Original: {JSON.stringify(this.state.cars, null, 10)}
        </span>
        <input
          className='inputLine'
          onChange={e => this.handleChange(e.target.value)}
        />
        <button
          className='confirmationButton'
          onClick={() => this.filterCars(this.state.userInput)}
        ></button>
        <span className='resultsBox filterObjectRB'>
          Filtered: {JSON.stringify(this.state.filteredArr)}
        </span>
      </div>
    );
  }
}

export default FilterObject;
