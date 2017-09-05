import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
//import events from './events';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {events: []};
  }

  componentDidMount() {
    fetch('/api/v1/calendar/events/uzd.json')
      .then(response => response.json())
      .then(json => {
        this.setState({events: json.map(event => this.transform(event))})
      })
  }

  transform(event) {
    return {
      'start': new Date(event.start),
      'end': new Date(event.end),
      'title': event.title
    }
  }

  render() {
    return (
      <div {...this.props}>
        <h3 className="callout">
          Click an event to see more info, or
          drag the mouse over the calendar to select a date/time range.
        </h3>
        <BigCalendar
          selectable
          events={this.state.events}
          defaultView='week'
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={(slotInfo) => alert(
            `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
            `\nend: ${slotInfo.end.toLocaleString()}`
          )}
        />
      </div>
    )
  }
}

export default Calendar;
