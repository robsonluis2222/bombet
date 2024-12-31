import React from 'react'
import {Link} from 'react-router-dom'
import './Game.css'

const Game = (props) => {

  const handleTryPlay = (gameName) => {
    if(gameName === 'Fortune Tiger'){
      location.href = '/play'
    }
  }

  return (
    <div className='game' onClick={() => handleTryPlay(props.name)}>
      <img src={props.image} alt="game-image" />
      <span>{props.name}</span>
    </div>
  )
}

export default Game