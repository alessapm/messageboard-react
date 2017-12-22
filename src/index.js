import React from 'react';
import ReactDOM from 'react-dom';
// import { Route, Router, browserHistory } from 'react-router';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './index.css';
import Main from './components/Main';
import Post from './components/FullPost';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path='/' component={Main} />
      <Route path='/post' component={Post} />
    </div>
  </BrowserRouter>, document.getElementById('root')
);
registerServiceWorker();
