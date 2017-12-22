import React, { Component } from 'react';

import '../App.css';
import PostContainer from './PostContainer';
import PostBtnContainer from './PostBtnContainer';
import NewPost from './NewPost';

export default class Main extends Component {
  constructor(){
    super();

    this.state = {
      posts: [{
          title: 'First Post',
          message: 'this is my first post. This is what a post looks like. ',
          user: 'User101',
          date: '12/21/17 @ 8:11am',
          comments: [{
            comment_user: 'am111',
            comment_msg: 'this is a comment. I disagree!'
          },
          {
            comment_user: 'DD431',
            comment_msg: 'this is an ANGRY comment. I disagree! Because Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique nulla quia tenetur, culpa ducimus cumque vel quidem, deserunt mollitia odit facere, sed quaerat inventore saepe perferendis. Velit quo nesciunt consectetur.'
          }]
        },
        {
          title: 'Second Post has a really long post title that is this',
          message: 'this is my SECOND post. This is sto;;;; still what a post looks like. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo ipsum magni veniam minus autem dicta totam praesentium rem ullam! Delectus veniam repellat numquam rerum id quod, quisquam, illo quas exercitationem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias odit consequatur at pariatur eius deserunt amet adipisci, quibusdam expedita, autem velit repellat doloremque ut consectetur sed officiis, debitis dicta ea!',
          user: 'User122',
          date: '12/21/17 @ 9:11am',
          comments: []
        }
      ],
      isNewPostActive: false,
      fullPostActive: false
    }
  }

createPost(){
  let newPost = JSON.parse(localStorage.getItem('newPost'));
  let currentPosts = this.state.posts;
  currentPosts.push(newPost.post);

  this.setState({
    isNewPostActive: false
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
  let index = getLocal.index;
  let comment = getLocal.comment;

  let stateCopy = [ ... this.state.posts];

  let isolatedPostComments = stateCopy[index].comments
  let addComment = isolatedPostComments.push(comment)

  // console.log('iso: ', isolatedPostComments);
  stateCopy[index].comments = isolatedPostComments;
  // console.log('stateCopy: ', stateCopy)
  this.setState({posts: stateCopy})
}


  render() {
    if(this.state.fullPostActive){
      return(
        <div className="main">
          <div className="main-container">
            <PostContainer posts={this.state.posts} fullPostActive={this.state.fullPostActive} showFullPost={this.showFullPost.bind(this)} newComment={this.newComment.bind(this)}/>
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
