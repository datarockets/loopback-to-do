import React, { Component } from 'react'
import { WithContext as ReactTags } from 'react-tag-input'
import api from './requests'

class TagsContainer extends Component {
  render = () => (
    <div>
      <ReactTags
        tags={this.props.tags}
        handleAddition={this.props.onCreate}
      />
    </div>
  );

  createTag = () => {
    api.card.tags.create(
      { id: this.props.cardId },
      response => this.props.onCreate(response.data),
      error => alert(error),
    )
  }
}

export default TagsContainer
