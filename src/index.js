import React from 'react';
import ReactDOM from 'react-dom';
// import { Route, Router, browserHistory } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import Main from './components/Main';
// import Post from './components/Post';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path='/' component={Main} />

    </div>
  </BrowserRouter>, document.getElementById('root')
);
registerServiceWorker();
