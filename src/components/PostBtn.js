import React, { Component } from 'react';

export default class PostBtnContainer extends Component {

  render(){
    return(
      <button onClick={this.props.showNewPostForm}>Create New Post</button>
    )
  }
}
