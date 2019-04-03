import React, { Component } from 'react';
import SelectDates from './SelectDates';
import Day from './Day';
import {  isDate, getDate, getDay, isWeekend, isFirstDayOfMonth, isLastDayOfMonth, getMonth, getYear } from 'date-fns';

class App extends Component {

  state = {
    dates: [
      new Date(2019, 2, 20),
      new Date(2019, 2, 21),
      new Date(2019, 2, 22),
      new Date(2019, 2, 23),
      new Date(2019, 2, 24),
      new Date(2019, 2, 25),
      new Date(2019, 2, 26),
      new Date(2019, 2, 27),
      new Date(2019, 2, 28),
      new Date(2019, 2, 29),
      new Date(2019, 2, 30),
      new Date(2019, 2, 31),
      new Date(2019, 3, 1),
      new Date(2019, 3, 2),
      new Date(2019, 3, 3),
      new Date(2019, 3, 4),
      new Date(2019, 3, 5),
      new Date(2019, 3, 6),
      new Date(2019, 3, 7),
      new Date(2019, 3, 8),
      new Date(2019, 3, 9),
      new Date(2019, 3, 10)
    ]
  };



  render() {
    
    const firstItem = this.state.dates[0];
    const lastItem = this.state.dates[this.state.dates.length-1];
    console.log(lastItem);

    return (
      
      <div className="App">
        <h1>Calendar generator</h1>
        
        <SelectDates />

        <div className="result">

            {
              this.state.dates.map( (date, index) =>
              <Day 
                index={index}
                isValid = {isDate(date)}
                dayOfWeek = {getDay(date)}
                isWeekend = {isWeekend(date)}
                dayOfMonth = {getDate(date)}
                isFirst = {isFirstDayOfMonth(date) || date === firstItem}
                isLast = {isLastDayOfMonth(date) || date === lastItem}
                month = {getMonth(date)}
                year = {getYear(date)}
              />
            )}

          </div> 
      </div>
    );
  }
}

export default App;
