import React, { Component } from 'react'
import CreateCardForm from 'src/components/CreateCardForm'

// import styles from './styles.css';

class CreateCardFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      description: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render = () => (
    <CreateCardForm
      description={this.description}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
    />
  );

  handleChange(event) {
    this.setState({ description: event.target.value })
  }

  handleSubmit(event) {
    alert(`An card was submitted: ${this.state.description}`)
    event.preventDefault()
  }
}

export default CreateCardFormContainer
