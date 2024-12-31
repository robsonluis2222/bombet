import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Saque.css'

const Saque = () => {
  const [saldo, setSaldo] = useState(0.00);

  // Carregar o saldo do localStorage quando o componente for montado
  useEffect(() => {
    const storedSaldo = localStorage.getItem('saldo');
    if (storedSaldo) {
      setSaldo(parseFloat(storedSaldo));  // Converte para float
    } else {
      setSaldo(0.00);  // Define 0.00 caso não tenha saldo
    }
  }, []);

  const handleSaque = () => {
    alert("Saque solicitado com sucesso !")
  }

  return (
    <div className='saque-div'>
      <Link to="/">
        <i className="bi bi-arrow-left" id='back-deposit'></i>
      </Link>
      <span className='saque-title'>Saque</span>
      <span className='saldo-span-saque'>Saldo: R$ {saldo.toFixed(2)}</span>  {/* Exibe o saldo formatado */}
      <input className='input-value-saque' type="text" style={{color: 'white'}} />
      <span id='warn'>taxa R$10</span><br />
      <button className='saque-btn' onClick={handleSaque}>Saque</button>
    </div>
  )
}

export default Saque
