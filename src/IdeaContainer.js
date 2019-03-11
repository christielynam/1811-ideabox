import React from 'react'
import IdeaCard from './IdeaCard'
import PropTypes from 'prop-types'

export const IdeaContainer = ({ ideas, removeIdea }) => {
  const displayIdeas = ideas.map(idea => (
    <IdeaCard key={idea.id} {...idea} removeIdea={removeIdea} />
  ))
  return (
    <div>
      {displayIdeas}
    </div>
  )
}

IdeaContainer.propTypes = {
  ideas: PropTypes.array.isRequired,
  removeIdea: PropTypes.func.isRequired
}

