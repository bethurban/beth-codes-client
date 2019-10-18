import React, { Component } from 'react';

class New extends Component {

  constructor(props){
    super(props);
    this.state = {
      title: "Title",
      content: "Content"
    }
  }

  // componentDidMount() {
  //   fetch('http://localhost:3000/api/v1/blogs/1')
  //     .then(resp => resp.json())
  //     .then(json => {
  //       this.setState({
  //         blog: json
  //       })
  //     })
  // }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.title, this.state.content)
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
