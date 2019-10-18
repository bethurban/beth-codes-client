import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Post from './Post.js';

class Blog extends Component {

  constructor(props){
    super(props);
    this.state = {
      blog: {},
      posts: []
     }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/blogs/1')
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          blog: json
        })
      })
    fetch('http://localhost:3000/api/v1/blogs/1/posts')
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          posts: json
        })
      })
  }

  render() {
    return (
      <div id="blog">
        <h1>{this.state.blog.title}</h1>
        <div id="description">
          <p>{this.state.blog.description}</p>
          <Link to="/new">New blog post</Link>
        </div>
        { this.state.posts ?
          <div>
            {this.state.posts.map(post =>
              <Post key={post.id} title={post.title} content={post.content} />
            )}
          </div>
          :
          null
        }
      </div>
    )
  }

}

export default Blog;
