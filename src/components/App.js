import React, { Component } from 'react';
import '../App.css';
import PostContainer from './PostContainer';
import PostBtnContainer from './PostBtnContainer';
import NewPost from './NewPost';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      posts: [{
          title: 'First Post',
          message: 'this is my first post. This is what a post looks like. ',
          user: 'User101',
          date: '12/21/17 @ 8:11am',
          comments: []
        },
        {
          title: 'Second Post has a really long post title that is this',
          message: 'this is my SECOND post. This is sto;;;; still what a post looks like. ',
          user: 'User122',
          date: '12/21/17 @ 9:11am',
          comments: []
        }
      ],
      isNewPostActive: false
    }
  }

createPost(){

}

showNewPostForm(){
  this.setState({isNewPostActive: true});
}


  render() {
    if (!this.state.isNewPostActive){
      return (
        <div className="App">
          <header>
            <h1>The Fairygodboss Message Board</h1>
          </header>
          <div className="main-container">
            <PostContainer posts={this.state.posts} />
            <PostBtnContainer showNew={this.showNewPostForm.bind(this)} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <header>
            <h1>The Fairygodboss Message Board</h1>
          </header>
          <div className="main-container">
            <NewPost />
          </div>
        </div>
      );
    }

  }
}
