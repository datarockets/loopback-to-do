import React, { Component } from 'react'
import CreateCardForm from 'src/components/CreateCardForm'
import PropTypes from 'prop-types'
import api from './requests'

class CreateCardFormContainer extends Component {
  state = {
    description: '',
  }

  render = () => (
    <CreateCardForm
      description={this.state.description}
      onChange={this.setDescription}
      onSubmit={this.createCard}
    />
  );

  setDescription = (event) => {
    this.setState({ description: event.target.value })
  }

  createCard = (event) => {
    event.preventDefault()
    api.cards.create(
      { description: this.state.description },
      (response) => {
        this.props.onCreate(response.data)
      },
      (error) => {
        alert(error)
      },
    )
  }
}

CreateCardFormContainer.propTypes = {
  onCreate: PropTypes.func.isRequired,
}

export default CreateCardFormContainer
