import React, { Component } from 'react';

export default class Comment extends Component {




render(){
  const comment = this.props.comment;
    return(
      <div className="comment">
        <h4>{comment.comment_user}</h4>
        <p>{comment.comment_msg}</p>
      </div>
    )
  }
}
