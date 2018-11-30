import React, { Component } from 'react'
import CreateCardForm from 'src/components/CreateCardForm'
import axios from 'axios'

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
    alert(`An card was submitted: ${this.state.description}`)
    event.preventDefault()
    axios.post('http://localhost:5000/api/v1/cards', {
      description: this.description,
    })
      .then((response) => {
        console.log(response)
      })
  }
}

export default CreateCardFormContainer
