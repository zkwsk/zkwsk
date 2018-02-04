import React, { Component } from 'react';

class DateToString extends Component {
  render() {

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const {date} = this.props;

    const dateObj = new Date(date);
    const month = months[dateObj.getMonth()];
    const year = dateObj.getFullYear();

    if (date) {
      return (
        <time dateTime={date}>{month}, {year}</time>
      );
    } else {
      return (
        <time dateTime={Date.now()}>Now</time>
      )
    }
    // @todo: return a nicer date format for "Now".

  }
}

export default DateToString;
