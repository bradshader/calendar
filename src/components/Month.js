import React, { Component } from 'react';

class Month extends Component {
  render() {

        let monthName = "";
        let year = this.props.year;

        if (this.props.month === 0) {monthName = "January"};
        if (this.props.month === 1) {monthName = "February"};
        if (this.props.month === 2) {monthName = "March"};
        if (this.props.month === 3) {monthName = "April"};
        if (this.props.month === 4) {monthName = "May"};
        if (this.props.month === 5) {monthName = "June"};
        if (this.props.month === 6) {monthName = "July"};
        if (this.props.month === 7) {monthName = "August"};
        if (this.props.month === 8) {monthName = "September"};
        if (this.props.month === 9) {monthName = "October"};
        if (this.props.month === 10) {monthName = "November"};
        if (this.props.month === 11) {monthName = "December"};
        

        return(
            <>
            <h2>{monthName} {year}</h2>
            <div className="days-of-week">
              <h3>Sun</h3>
              <h3>Mon</h3>
              <h3>Tue</h3>
              <h3>Wed</h3>
              <h3>Thu</h3>
              <h3>Fri</h3>
              <h3>Sat</h3>
            </div>
            </>
        );
    }
}

export default Month;