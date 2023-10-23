import React, { Component } from 'react';

class AgeCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birthDate: '',
      age:null,
    };
  }

  calculateAge = () => {
    const birthDate = new Date(this.state.birthDate);
    const currentDate = new Date();
    const ageDiff = currentDate - birthDate;
    const ageDate = new Date(ageDiff);
    const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);

    this.setState({ age: calculatedAge });
  };

  handleDateChange = (e) => {
    this.setState({ birthDate: e.target.value });
  };

  render() {
    return (
      <div className="age-calculator">
        <label>Enter your Date of Birth:</label>
        <input
          type="date"
          value={this.state.birthDate}
          onChange={this.handleDateChange}
        />
        <button onClick={this.calculateAge}>Calculate Age</button>
        {this.state.age !== null && (
          <p>Your age is: {this.state.age} years</p>
        )}
      </div>
    );
  }
}

export default AgeCalculator;
