import React, { Component } from 'react';

class New extends Component {

  constructor(props){
    super(props);
    this.state = {
      title: "Title",
      content: "Content"
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    fetch('http://localhost:3000/api/v1/blogs/1/posts', {
      method: 'POST',
      body: JSON.stringify({
        blog_id: 1,
        title: event.target.title.value,
        content: event.target.content.value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(json => {
        if (json.id) {
          alert("Published!")
        } else {
          throw new Error("There was a problem publishing this post.")
        }
      })
  }

  render() {
    return (
      <div id="form">
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              required
              type="text"
              onChange={this.handleChange}
              name="title"
              value={this.state.title}
            />
          </div>
          <div>
            <textarea
              required
              type="text"
              onChange={this.handleChange}
              name="content"
              value={this.state.content}
            />
          </div>
          <button type="submit">Publish</button>
        </form>
      </div>
    )
  }

}

export default New;
