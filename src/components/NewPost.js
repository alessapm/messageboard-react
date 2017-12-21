import React, { Component } from 'react';

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
      <div className="post">
        <div className="form-content">
          <label>Post Title: </label><br/>
          <input name="title"
          onChange={this.handleChange.bind(this)}
          type='text'
          placeholder="Enter a title for your post" />
          <br /><br />
          <label>Message: </label><br/>
          <input name="message"
          onChange={this.handleChange.bind(this)}
          type='text'
          placeholder="Enter post message" />
          <br /><br />
          <input name="user"
          onChange={this.handleChange.bind(this)}
          type='text'
          placeholder="Enter Username for post" />
          <br /><br />
        </div>
      </div>
    )
  }
}
