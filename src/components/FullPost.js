import React, { Component } from 'react';

export default class PostPreview extends Component {
  constructor(){
    super();

    this.state = {};
  }

  render(){
  const showAll = this.props.showAll;
    if (showAll){
      return(
        <div className="full-post">
          <div className="full-content">
            <div className="full-details">
              <div className="title-user">
                <h1>{showAll.title}</h1>
                <h2>By: {showAll.user} On {showAll.date}</h2>
              </div>
              <button onClick={() => {console.log('back btn clicked')}}>
                Back to posts
              </button>
            </div>
            <div className="full-message">
              <p>{showAll.message}</p>
            </div>
          </div>
          <div className="full-comments">
            <p>This is where comment section would go</p>
          </div>
        </div>
      )
    }
  }

}
