import React, { Component } from 'react';

export default class PostPreview extends Component {
  constructor(){
    super();

    this.state = {};
  }

  // {
  //   title: '',
  //   message: '',
  //   user: '',
  //   date: '',
  //   comments: []
  // }

  // componentDidMount(){
  //   this.setState({post: this.props.post})
  // }

  render(){
    const post = this.props.post;

    if (post){
      return(
        <div className="post">
          <div className="post-content">
            <h2>{post.title}</h2>
            <div className="post-details">
              <div className="poster-and-comments">
                <p>Posted by: {post.user} </p>
                <p className="comments">{post.comments.length} comments</p>
              </div>
              <div className="post-update">
                <p>Last Update: {post.date}</p>
              </div>
            </div>
          </div>
          <div className="arrow"><i className="fa fa-caret-right" aria-hidden="true"></i></div>
        </div>
      )
    }

    else {
      return(
        <div className="post">
          <p>Yay this is a post</p>
        </div>
      )
    }
  }
}
