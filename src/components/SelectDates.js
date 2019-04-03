import React, { Component } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class SelectDates extends Component {
  render() {
    return (
        <div className="SelectDates">
          <form>
            <div className ="starting">
              <label>Start date:</label>
              <input type="text" />
            </div>
            <div className ="ending">
              <label>End date:</label>
              <input type="text" />
            </div>
            <div className="button-container">
              <input type="submit" value="Let's go!"></input>
            </div>
          </form>
        </div>
    );
  }
}

export default SelectDates;