import React, { Component } from 'react';
import PostPreview from './PostPreview';

export default class PostContainer extends Component {
  // constructor(props){
  //   super(props);
  // }

  render(){
    const posts = this.props.posts.map((post, index) => {
        return (
          <PostPreview post={post} key={index} />
        )
      })

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
