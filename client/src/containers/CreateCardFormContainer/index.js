import React, { Component } from 'react'
import CreateCardForm from 'src/components/CreateCardForm'

const axios = require('axios')

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
    axios.post('http://localhost:5000/cards', {
      description: this.description,
    })
      .then((response) => {
        console.log(response)
      })
  }
}

export default CreateCardFormContainer
