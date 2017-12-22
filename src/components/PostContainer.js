import React, { Component } from 'react';
import Post from './Post';
import CommentContainer from './CommentContainer';
import NewComment from './NewComment';

export default class PostContainer extends Component {
  // constructor(props){
  //   super(props);
  // }

  render(){
    const posts = this.props.posts.map((post, index) => {
        return (
          <Post post={post} key={index} showFullPost={this.props.showFullPost} />
        )
      })

    const fullPostActive = this.props.fullPostActive;

    if (fullPostActive){
      return(
        <div className="full-post">
          <div className="full-content">
            <div className="full-details">
              <div className="title-user">
                <h1>{fullPostActive.title}</h1>
                <h2>By: {fullPostActive.user} On {fullPostActive.date}</h2>
              </div>
              <button onClick={() => {this.props.showFullPost()}}>
                Back to posts
              </button>
            </div>
            <div className="full-message">
              <p>{fullPostActive.message}</p>
            </div>
          </div>
          <div className="full-comments">
            <h3>Responses</h3>
            <CommentContainer comments={fullPostActive.comments}/>
            <NewComment />
          </div>
        </div>
      )
    }
    if (this.props.posts.length > 0) {
      return(
        <div className="post-container">
          {posts}
        </div>
      )
    } else {
      return (
        <div className="post-container">
          <p>There are currently no posts...add one!</p>
        </div>
      )
    }

  }

}
