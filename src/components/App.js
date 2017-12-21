import React, { Component } from 'react';
import '../App.css';
import PostContainer from './PostContainer';

export default class App extends Component {
  constructor(){
    super();

    this.state = {

    }
  }




  render() {
    return (
      <div className="App">
        <header>
          <h1>The Fairygodboss Message Board</h1>
        </header>
        <div className="main-container">
          <PostContainer />
        </div>
      </div>
    );
  }
}
