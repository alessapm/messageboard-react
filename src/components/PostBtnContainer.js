import React, { Component } from 'react';
import PostBtn from './PostBtn';
import CancelBtn from './CancelBtn';
import CreateBtn from './CreateBtn';

export default class PostBtnContainer extends Component {

  render(){
    if (this.props.newPost){
      return(
        <div className="post-btn-container">
          <CancelBtn />
          <CreateBtn />
        </div>
      )
    } else {
      return(
        <div className="post-btn-container">
          <PostBtn showNew={this.props.showNew} />
        </div>
      )
    }
  }
}
