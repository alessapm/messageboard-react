import React, { Component } from 'react';

export default class CreateBtn extends Component {
  render(){
    return(
      <button onClick={this.props.submit}>Create Post</button>
    )
  }
}
