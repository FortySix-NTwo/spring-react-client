import React from 'react';
import ReactDOM from 'react-dom';
import { App, NavBar } from './component';
import { unregister } from './core';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

unregister();
