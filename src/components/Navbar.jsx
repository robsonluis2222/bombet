import React, { useRef, useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const modalRef = useRef(null)
  const entrarRef = useRef(null)
  const registrarRef = useRef(null)
  const passwordRef = useRef(null)
  const menuRef = useRef(null)

  const [showed, setShowed] = useState(false)
  const [action, setAction] = useState(null)
  const [menuShow, setMenuShow] = useState(false)

  const menuAction = () => {
    if(menuShow === false){
      menuRef.current.style.display = 'flex';
      setMenuShow(true)
    }
    if(menuShow === true){
      menuRef.current.style.display = 'none';

      setMenuShow(false)
    }
  }

  const showPassword = () => {
    if(showed === false){
      setShowed(true)
      passwordRef.current.type = 'text'
    }
    if(showed === true){
      setShowed(false)
      passwordRef.current.type = 'password'
    }
  }

  const closeModal = () => {
    modalRef.current.style.display = 'none';
    passwordRef.current.type = 'password'
  }
  const loginCaller = () => {
    setAction('login')
    registrarRef.current.style.backgroundColor = '#523C3F';
    registrarRef.current.style.color = 'white';
    modalRef.current.style.display = 'flex';
    entrarRef.current.style.backgroundColor = '#FFE34F';
    entrarRef.current.style.color = '#B94B6B';
  }
  const registerCaller = () => {
    setAction('register')
    entrarRef.current.style.backgroundColor = '#523C3F';
    entrarRef.current.style.color = 'white';
    modalRef.current.style.display = 'flex';
    registrarRef.current.style.backgroundColor = '#FFE34F';
    registrarRef.current.style.color = '#B94B6B';
  }

  return (
    <div className='limited-space-nav'>

      <div className='menu' ref={menuRef}>
        <div className='menu-item'>
          <i class="bi bi-border-all" id='t-icon'></i>
          <span>Todos</span>
        </div>
        <div className='menu-item'>
          <i class="bi bi-dice-6-fill" id='s-icon'></i>
          <span>Slots</span>
        </div>
        <div className='menu-item'>
          <i class="bi bi-piggy-bank-fill" id='d-icon'></i>
          <span>Depósito</span>
        </div>
        <div className='menu-item'>
          <i class="bi bi-cash-coin" id='sa-icon'></i>
          <span>Saque</span>
        </div>
      </div>

      <div className='modal-account' ref={modalRef}>
        <div className='account-div'>
          <i className="bi bi-x-lg" id='close-modal-btn' onClick={closeModal}></i>
          <div className='select-login-type'>
            <span className='modal-login-btn' ref={entrarRef} onClick={() => loginCaller()}>Entrar</span>
            <span className='modal-register-btn' ref={registrarRef} onClick={() => registerCaller()}>Registro</span>
          </div>
          <div className='modal-inputs'>
            <span className="prefix">+55</span>
            <input className='number-input' type="text" placeholder='Número de telefone' />
            <i className="bi bi-eye" id='eye' onClick={() => showPassword()}></i>
            <input className='password-input' type="password" ref={passwordRef} placeholder='Senha' />
            {action === 'login' ? <span className='submit-form'>Entrar</span> : <span className='submit-form'>Cadastrar</span>}
            {action === 'login' ? (
                <span className='esqueci-a-senha'>Esqueci a senha</span>
              ) : (
                <div>
                  <input type="checkbox" id="termos-condicoes" />
                  <label htmlFor="termos-condicoes" className='esqueci-a-senha'>
                    Eu concordo com as Condições e Política de Privacidade
                  </label>
                </div>
              )}
          </div>

        </div>
      </div>

      <i className="bi bi-list" id="hamburguer" onClick={() => menuAction()}></i>
      <img src="https://w1-bombet.com/_nuxt/img/logo1.3ad5d45.png" alt="logo" />
      <div className='action-account'>
        <span className='style-login-btn' onClick={() => loginCaller()}>Entrar</span>
        <span className='style-login-btn' onClick={() => registerCaller()}>Registro</span>
      </div>
    </div>
  )
}

export default Navbar