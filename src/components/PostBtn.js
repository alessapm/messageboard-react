import React, { Component } from 'react';

export default class PostBtnContainer extends Component {

  render(){
    return(
      <button onClick={this.props.showNew}>Create New Post</button>
    )
  }
}
