import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Calendar generator</h1>
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
        <div className="result">
            <h2>March 2019</h2>
            <div className="days-of-week">
            <h3>Sun</h3>
            <h3>Mon</h3>
            <h3>Tue</h3>
            <h3>Wed</h3>
            <h3>Thu</h3>
            <h3>Fri</h3>
            <h3>Sat</h3>
            </div>
            <div className="week">
              <div className="day"></div>
              <div className="day"></div>
              <div className="day"></div>
              <div className="day"></div>
              <div className="day"></div>
              <div className="day"></div>
              <div className="day"></div>
            </div>
            <div className="week">
              <div className="day"></div>
              <div className="day"></div>
              <div className="day"></div>
              <div className="day"></div>
              <div className="day"></div>
              <div className="day"></div>
              <div className="day"></div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
