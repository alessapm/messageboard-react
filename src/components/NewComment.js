import React, { Component } from 'react';
import update from 'react-addons-update';


export default class NewComment extends Component {
  constructor(props){
    super(props);

    this.state = {
      comment: {
        comment_user: '',
        comment_msg: ''
      }
    }
  }

handleChange(event){
    let newState = update(this.state, {
      comment: {
        $merge: {
          [event.target.name]: event.target.value
        }
      }
    });

    this.setState(newState);
  }

  handleSubmit(){
    localStorage.setItem('newComment', JSON.stringify(this.state));
    console.log('handleSubmit');
  }



render(){
    return(
      <div className="new-comment">
        <div className="comment-inputs">
          <label>Reply Message: </label><br/>
          <textarea name="comment-msg"
          id="comment-input"
          onChange={this.handleChange.bind(this)}
          type='text'
          />
          <br /><br />
          <label>Reply User: </label><br/>
          <input name="comment-user"
          onChange={this.handleChange.bind(this)}
          type='text'
          />
        </div>
        <button id="reply-btn" onClick={this.handleSubmit()}>Post Reply</button>
      </div>
    )
  }
}