import React from 'react'
import './Game.css'

const Game = (props) => {
  return (
    <div className='game'>
      <img src={props.image} alt="game-image" />
      <span>{props.name}</span>
    </div>
  )
}

export default Game