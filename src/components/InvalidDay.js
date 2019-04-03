import React, { Component } from 'react';

class InvalidDay extends Component {
  render() {

    let invalidClass = this.props.saturday ? "day invalid saturday" : "day invalid";

    return(
        <div className={invalidClass}>
            <span></span>
        </div>
    )
  }
}

export default InvalidDay;