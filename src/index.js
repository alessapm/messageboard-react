import React from 'react';
import ReactDOM from 'react-dom';
// import { Route, Router, browserHistory } from 'react-router';
import './index.css';
import Main from './components/Main';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
  <Main />, document.getElementById('root')
);
registerServiceWorker();
