import React, { Component } from 'react';

class New extends Component {

  constructor(props){
    super(props);
    this.state = { blog: {} }
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

  render() {
    return (
      <div id="form">
      
      </div>
    )
  }

}

export default New;
