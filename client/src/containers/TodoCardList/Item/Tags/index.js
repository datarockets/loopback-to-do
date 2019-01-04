import React, { Component } from 'react'

class TagsContainer extends Component {
	render = () => (
	);
	
  createTag = (event) => {
    event.preventDefault()
    api.tags.create(
      { name: 'test' },
      response => this.props.onCreate(response.data),
      error => alert(error),
    )
  }
}

export default TagsContainer
