import React, { Component } from 'react';
import update from 'react-addons-update';
import PostBtnContainer from './PostBtnContainer';


export default class NewPost extends Component {
  constructor(props){
    super(props);

    this.state ={
      post: {
        title: '',
        message: '',
        user: '',
        date: '',
        comments: []
      }
    }
  }

  handleChange(event){
    let newState = update(this.state, {
      post: {
        $merge: {
          [event.target.name]: event.target.value
        }
      }
    });

    this.setState(newState);
  }

  handleSubmit(){
    const date = new Date();
    const month = date.getMonth()+1;
    const day = date.getDate();
    const year = date.getYear() - 100;
    const hours = date.getHours() < 13 ? date.getHours() : date.getHours() - 12;
    const minutes = date.getMinutes();
    const meridian = date.getHours() < 13 ? 'am' : 'pm';

    const timestamp =`${month}/${day}/${year} @ ${hours}:${minutes}${meridian}`;

    let newState = update(this.state, {
      post: {
        $merge: {
          date: timestamp
        }
      }
    });

    this.setState(newState, () => {
       localStorage.setItem('newPost', JSON.stringify(this.state));
      this.props.createPost()
    });
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
          <textarea name="message"
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
        <PostBtnContainer newPost={true} submit={this.handleSubmit.bind(this)} showNewPostForm={this.props.showNewPostForm}/>
      </div>
    )
  }
}
