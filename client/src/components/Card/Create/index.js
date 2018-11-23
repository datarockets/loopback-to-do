import React, { Component } from 'react'

// import styles from './styles.css';

class CreateCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      description: '',
    }

    this.handleChange = this.handleChange.bind(this)
  }

  render = () => (
    <form>
      <input id='kek' value={this.state.description} onChange={this.handleChange} />
      <input
        type='submit'
        value='Add'
      />
    </form>
  );

  handleChange(event) {
    this.setState({ description: event.target.value })
  }
}

export default CreateCard
