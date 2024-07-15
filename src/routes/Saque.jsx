import React from 'react'
import {Link} from 'react-router-dom'
import './Saque.css'

const Saque = () => {
  return (
    <div className='saque-div'>
      <Link to="/">
        <i className="bi bi-arrow-left" id='back-deposit'></i>
      </Link>
        <span className='saque-title'>Saque</span>
        <span className='saldo-span-saque'>Saldo: R$ 0.00</span>
        <input className='input-value-saque' type="text" disabled/>
        <span id='warn'>min. 10</span>
        <span className='spacement' id='warn'>* Sem saldo disponível *</span>
        <button className='saque-btn' disabled>Saque</button>
    </div>
  )
}

export default Saque