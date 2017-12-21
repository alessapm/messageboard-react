import React, { Component } from 'react';
import PostBtnContainer from './PostBtnContainer';

export default class NewPost extends Component {
  constructor(props){
    super(props);

    this.state ={
      title: '',
      message: '',
      user: '',
      date: '',
      comments: []
    }
  }

  handleChange(event){
    // this.setState({event.target.name: event.target.value})
  }

  handleSubmit(){

  }

  render(){
    return(
      <div className="new-post">
        <h1>Create a new post</h1>
        <div className="form-content">
          <label>Post Title: </label><br/>
          <input name="title"
          onChange={this.handleChange.bind(this)}
          type='text'
          />
          <br /><br />
          <label>Message: </label><br/>
          <input name="message"
          id="message-input"
          onChange={this.handleChange.bind(this)}
          type='text'
          />
          <br /><br />
          <label>User: </label><br/>
          <input name="user"
          onChange={this.handleChange.bind(this)}
          type='text'
          />
          <br /><br />
        </div>
        <PostBtnContainer newPost={true} />
      </div>
    )
  }
}
