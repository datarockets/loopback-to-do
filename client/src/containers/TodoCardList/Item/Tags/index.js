import React, { Component } from 'react'
import { WithContext as ReactTags } from 'react-tag-input'
import api from './requests'

class TagsContainer extends Component {
  render = () => (
    <div>
      <ReactTags
        tags={this.props.tags}
        handleAddition={this.createTag}
        handleDelete={this.props.onDelete}
      />
    </div>
  );

  createTag = tag => {
    api.card.tags.create(
      { id: this.props.cardId },
      { text: tag.text },
      response => this.props.onCreate({
        id: response.data.id.toString(),
        text: response.data.text,
      }),
      error => alert(error),
    )
  }
}

export default TagsContainer
