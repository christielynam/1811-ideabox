import React, { Component } from 'react';
import IdeaForm from './IdeaForm'
import { IdeaContainer } from './IdeaContainer'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      ideas: []
    }
  }

  addIdea = (idea) => {
    const newIdea = {...idea, id: Date.now()}
    this.setState({ ideas: [...this.state.ideas, newIdea] })
  }

  removeIdea = (id) => {
    const ideas = this.state.ideas.filter(idea => idea.id !== id)
    this.setState({ ideas })
  }

  render() {
    const { ideas } = this.state
    return (
      <div className="App">
        <header>
          <h1>💡IdeaBox💡</h1>
          <IdeaForm addIdea={this.addIdea} />
        </header>
        <IdeaContainer ideas={ideas} removeIdea={this.removeIdea} />
      </div>
    );
  }
}

export default App;
