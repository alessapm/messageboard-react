import React, { Component } from 'react';
import PostBtn from './PostBtn';

export default class PostBtnContainer extends Component {

  render(){
    return(
      <div className="post-btn-container">
        <PostBtn showNew={this.props.showNew} />
      </div>
    )
  }
}
