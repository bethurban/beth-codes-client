import React, { Component } from 'react';

class Blog extends Component {

  constructor(props){
    super(props);
    this.state = { blog: {} }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/blogs/1')
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          blog: json
        })
      })
  }

  render() {
    return (
      <div id="blog">
        <h1>{this.state.blog.title}</h1>
        <div id="description">
          <p>{this.state.blog.description}</p>
          // Render individual blog posts
          // link to create new post
        </div>
      </div>
    )
  }

}

export default Blog;
