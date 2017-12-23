import React, { Component } from 'react';
import Comment from './Comment';

export default class CommentContainer extends Component {

  constructor(props){
    super(props)

    this.state = {}
  }

  componentWillReceiveProps(newProps) {
  if(this.props != newProps) {
    this.setState({
      newComments: newProps.comments
    });
  }
}

  render(){
    const comments = this.state.newComments
      ? this.state.newComments.map((comment, index) => {
        return (
          <Comment comment={comment} key={index} />
        )
      })

      : this.props.comments.map((comment, index) => {
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
