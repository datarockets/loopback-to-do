import React, { Component } from 'react'
import CreateCardForm from 'src/components/CreateCardForm'

class CreateCardFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      description: '',
    }
  }

  render = () => (
    <CreateCardForm
      description={this.description}
      setDescription={this.setDescription}
      createCard={this.createCard}
    />
  );

  setDescription = (event) => {
    this.setState({ description: event.target.value })
  }

  createCard = (event) => {
    alert(`An card was submitted: ${this.state.description}`)
    event.preventDefault()
  }
}

export default CreateCardFormContainer
