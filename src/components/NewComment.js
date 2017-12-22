import React, { Component } from 'react';
import update from 'react-addons-update';


export default class NewComment extends Component {
  constructor(props){
    super(props);

    this.state = {
      comment: {
        comment_user: '',
        comment_msg: '',
      },
      index: ''
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
    this.setState({index: this.props.index}, () => {
      localStorage.setItem('newComment', JSON.stringify(this.state));
      this.props.newComment();
    })
  }


render(){
    return(
      <div className="new-comment">
        <div className="comment-inputs">
          <label>Reply Message: </label><br/>
          <textarea name="comment_msg"
          id="comment-input"
          onChange={this.handleChange.bind(this)}
          type='text'
          />
          <br /><br />
          <label>Reply User: </label><br/>
          <input name="comment_user"
          onChange={this.handleChange.bind(this)}
          type='text'
          />
        </div>
        <button id="reply-btn" onClick={() => this.handleSubmit()}>Post Reply</button>
      </div>
    )
  }
}
