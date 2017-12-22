import React, { Component } from 'react';

export default class CancelBtn extends Component {

  render(){

    return(
      <button id="cancel"
      onClick={() => this.props.showNewPostForm()}>
      Cancel</button>
    )
  }
}
