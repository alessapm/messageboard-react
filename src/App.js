import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route} from 'react-router-dom';
import './App.css';
import Main from './components/Main';

export default class App extends Component {
  constructor(){
    super()
  }

 render() {
    return (
       <Router>
          <div className="App">
            <Route exact path="/" render={() => <Main />} />
        </div>
      </Router>
    );
  }

}
