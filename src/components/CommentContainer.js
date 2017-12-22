import React, { Component } from 'react';
import Comment from './Comment';

export default class CommentContainer extends Component {


render(){
  const comments = this.props.comments.map((comment, index) => {
    return (
      <Comment comment={comment} key={index} />
    )
  })

    return(
      <div>
        {comments}
      </div>
    )
  }
}
