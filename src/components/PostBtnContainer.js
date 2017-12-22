import React, { Component } from 'react';
import PostBtn from './PostBtn';
import CancelBtn from './CancelBtn';
import CreateBtn from './CreateBtn';

export default class PostBtnContainer extends Component {

  render(){
    if (this.props.newPost){
      return(
        <div className="post-btn-container">
          <CancelBtn showNewPostForm={this.props.showNewPostForm}/>
          <CreateBtn submit={this.props.submit}/>
        </div>
      )
    } else {
      return(
        <div className="post-btn-container">
          <PostBtn showNewPostForm={this.props.showNewPostForm} />
        </div>
      )
    }
  }
}
