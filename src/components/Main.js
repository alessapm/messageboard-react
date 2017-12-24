import React, { Component } from 'react';

import '../App.css';
import PostContainer from './PostContainer';
import PostBtnContainer from './PostBtnContainer';
import NewPost from './NewPost';

export default class Main extends Component {
  constructor(){
    super();

    this.state = {
      posts: [],
      isNewPostActive: false,
      fullPostActive: false,
      commentsUpdated: false
    }
  }

createPost(){
  let newPost = JSON.parse(localStorage.getItem('newPost'));
  let currentPosts = this.state.posts;
  currentPosts.push(newPost.post);

  this.setState({
    isNewPostActive: false
  }, () => {
    this.showFullPost()
  })
}

showNewPostForm(){
  let createNewShowing = this.state.isNewPostActive
  this.setState({isNewPostActive: !createNewShowing});
}

showFullPost(){
  let activePost = JSON.parse(localStorage.getItem('activePost'));
  if (this.state.fullPostActive){
    this.setState({fullPostActive: ''});
    localStorage.removeItem('activePost');
  } else {
    this.setState({fullPostActive: activePost})
  }
}

newComment(){
  let getLocal = JSON.parse(localStorage.getItem('newComment'));
  let index = getLocal.index ? getLocal.index : this.state.posts.length - 1;
  console.log('index: ', index)
  let comment = getLocal.comment;

  let stateCopy = [ ...this.state.posts];

  let isolatedPostComments = stateCopy[index].comments;
  let addComment = isolatedPostComments.push(comment);

  // console.log('iso: ', isolatedPostComments);
  stateCopy[index].comments = isolatedPostComments;
  console.log('stateCopy[index]: ', stateCopy[index])

  let newFullPost = {index: index, post: stateCopy[index]}
  this.setState({posts: stateCopy,
                commentsUpdated: true,
                fullPostActive: newFullPost
                })
  window.setTimeout(() => this.setState({commentsUpdated: false}), 1000)
}


  render() {
    if(this.state.fullPostActive){
      return(
        <div className="main">
          <div className="main-container">
            <PostContainer posts={this.state.posts}
            fullPostActive={this.state.fullPostActive}
            showFullPost={this.showFullPost.bind(this)}
            newComment={this.newComment.bind(this)}
            commentsUpdated={this.state.commentsUpdated}
            />
          </div>
        </div>
      )
    }
    if (!this.state.isNewPostActive){
      return (

          <div className="main">
            <header>
              <h1>The Fairygodboss Message Board</h1>
            </header>
            <div className="main-container">
              <PostContainer posts={this.state.posts} fullPostActive={this.state.fullPostActive} showFullPost={this.showFullPost.bind(this)}/>
              <PostBtnContainer showNewPostForm={this.showNewPostForm.bind(this)} />
            </div>
          </div>

      );
    } else {
      return (
          <div className="main">
            <div className="main-container">
              <NewPost createPost={this.createPost.bind(this)} showNewPostForm={this.showNewPostForm.bind(this)}/>
            </div>
          </div>

      );
    }

  }
}
