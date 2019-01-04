import React, { Component } from 'react'
import { WithContext as ReactTags } from 'react-tag-input'

class TagsContainer extends Component {
	render = () => (
		<div>
      <ReactTags tags={this.props.tags}
       />
    </div>
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
