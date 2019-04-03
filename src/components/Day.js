import React, { Component } from 'react';
import Month from './Month'
import InvalidDay from './InvalidDay'

class Day extends Component {
  render() {

    if(this.props.isValid) {

        
        let weekdayClass = this.props.isWeekend ? "day weekend" : "day weekday";
        let firstClass = this.props.isFirst ? "first" : "";
        let isSaturday = this.props.dayOfWeek === 6 ? "saturday" : "";

        const classes = weekdayClass + " " + firstClass + " " + isSaturday;
        

        if (this.props.isFirst) {

            let i;
            let firstInvalidDays = [];
            for(i=0; i < this.props.dayOfWeek; i++) {
                firstInvalidDays.push('invalid');
            }

            return(
                <>
                <Month 
                    month={this.props.month} 
                    year={this.props.year}/>
                
                {firstInvalidDays.map( (day, index) =>
                    <InvalidDay />
                )}

                <div className={classes}>
                    <span>{this.props.dayOfMonth}</span>
                </div>
                </>
            );

        } else if (this.props.isLast) {

            let i;
            let lastInvalidDays = [];
            for(i=this.props.dayOfWeek; i < 6; i++) {
                lastInvalidDays.push('invalid');
            }

            return (
                <>
                <div className={classes}>
                    <span>{this.props.dayOfMonth}</span>
                </div>

                {
                lastInvalidDays.map((day, i) => {
                    if(lastInvalidDays.length === i + 1) {
                        return(<InvalidDay key={i} saturday={true} />)
                    } else {
                        return(<InvalidDay key={i} />)
                    }
                })
                }

                <div class="bottom-border"></div>
                </>
            );

            
        } else {
            return (
                <div className={classes}>
                    <span>{this.props.dayOfMonth}</span>
                </div>
            );
        }
    }
    else 
    {
        return (
            <div className="day invalid">
                <span></span>
            </div>
        );
    }
    
  }
}

export default Day;