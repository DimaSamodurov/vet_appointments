import React from 'react'
import ReactDOM from 'react-dom'

import Hello from 'components/hello'

document.addEventListener("DOMContentLoaded", e => {
  ReactDOM.render(<Hello name="React" />, document.body.appendChild(document.createElement('div')))
})
