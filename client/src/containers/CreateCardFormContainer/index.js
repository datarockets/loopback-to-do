import React, { Component } from 'react'
import CreateCardForm from 'src/components/CreateCardForm'
import axios from 'axios'
import PropTypes from 'prop-types'

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
    axios.post('http://localhost:5000/api/v1/cards', {
      description: this.description,
    })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        alert(error)
        this.props.addTodoCard({
          id: Math.floor(Math.random() * 100) + 3,
          description: this.state.description,
        }) // change after completing endpoint
      })
  }
}

CreateCardFormContainer.propTypes = {
  addTodoCard: PropTypes.func.isRequired,
}

export default CreateCardFormContainer
