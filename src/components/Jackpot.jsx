import React, { useState, useEffect } from 'react'
import './Jackpot.css'

const Jackpot = () => {
  const [jackpot, setJackpot] = useState(27422919.82);

  useEffect(() => {
    const aumentarJackpot = () => {
      setTimeout(() => {
        setJackpot(jackpot + 247.54)
    }, 3000);
    }
    aumentarJackpot()
  }, [jackpot])


  return (
    <div className='jackpot-div'>
      <img src="https://w1-bombet.com/_nuxt/img/jackpot-bg.8a334cc.png" alt="jackpot-img" />
      <h2 className='jackpot-value'>{jackpot.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</h2>
    </div>
  )
}

export default Jackpot