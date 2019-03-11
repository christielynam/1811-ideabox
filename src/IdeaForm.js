import React, { Component } from 'react'
import PropTypes from 'prop-types'

class IdeaForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: ''
    }
  }

  handleChange = (e) => {
    const { name, value } =  e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addIdea(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" 
          name='title'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input type="text" 
          name='body'
          value={this.state.body}
          onChange={this.handleChange}
        />
        <button>Add Idea</button>
      </form>
    )
  }
}

IdeaForm.propTypes = {
  addIdea: PropTypes.func.isRequired
}

export default IdeaForm
