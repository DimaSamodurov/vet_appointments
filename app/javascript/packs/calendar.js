import React from 'react'
import ReactDOM from 'react-dom'

import 'react-big-calendar/lib/css/react-big-calendar.css'

import Calendar from 'components/calendar'

document.addEventListener("DOMContentLoaded", e => {
  ReactDOM.render(<Calendar className="calendar"/>,
    document.body.appendChild(document.createElement('div')))
})
