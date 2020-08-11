import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './component'
import { unregister } from './core'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

unregister()
