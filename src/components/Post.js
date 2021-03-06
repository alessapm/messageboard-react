import React, { Component } from 'react';

export default class Post extends Component {
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

  componentDidMount(){
    this.setState({post: this.props.post, index: this.props.index})
  }

  activateFullPost(){
     localStorage.setItem('activePost', JSON.stringify(this.state));
     this.props.showFullPost();
  }

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
                <p className="comments" onClick={() => this.activateFullPost()}>{post.comments.length} comments</p>
              </div>
              <div className="post-update">
                <p>Last Update: {post.date}</p>
              </div>
            </div>
          </div>
          <div className="arrow" onClick={() => this.activateFullPost()}><i className="fa fa-caret-right" aria-hidden="true"></i></div>
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
