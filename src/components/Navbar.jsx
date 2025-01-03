import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const modalRef = useRef(null)
  const entrarRef = useRef(null)
  const registrarRef = useRef(null)
  const passwordRef = useRef(null)
  const numberRef = useRef(null)
  const menuRef = useRef(null)

  const [showed, setShowed] = useState(false)
  const [action, setAction] = useState(null)
  const [menuShow, setMenuShow] = useState(false)
  const [isLogged, setIsLogged] = useState(false)
  const [numberChecked, setNumberChecked] = useState(null)
  const [saldo, setSaldo] = useState(0)  // Estado para armazenar o saldo

  const numberVerification = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      setNumberChecked(value); // Atualiza o estado apenas se for numérico
    }
  }

  const closeMenu = () => {
    menuRef.current.style.display = 'none';
    setMenuShow(false)
  }

  const girarReload = () => {
    const icone = document.getElementById('reload-saldo');
    icone.classList.toggle('reload-rotacionado');

    // Atualiza o saldo sempre que o ícone for clicado
    const storedSaldo = localStorage.getItem('saldo');
    if (storedSaldo) {
      setSaldo(parseFloat(storedSaldo));  // Converte para float
    }
  }

  const handleLogin = () => {
    let telefone = numberRef.current.value;
    let senha = passwordRef.current.value;

    let savedTelefone = localStorage.getItem('telefone');
    let savedSenha = localStorage.getItem('senha');

    if (telefone === savedTelefone && senha === savedSenha) {
      setIsLogged(true);
      closeModal();
    } else {
      alert("Credenciais inválidas");
    }
  }

  const handleRegister = () => {
    let telefone = numberRef.current.value;
    let senha = passwordRef.current.value;

    localStorage.setItem('telefone', telefone);
    localStorage.setItem('senha', senha);

    const isRegistered = true;

    if (isRegistered) {
      setIsLogged(true);
      closeModal();
    } else {
      alert("Credenciais inválidas");
    }
  }

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

  // Recupera o saldo do localStorage ao carregar o componente
  React.useEffect(() => {
    const storedSaldo = localStorage.getItem('saldo');
    if (storedSaldo) {
      setSaldo(parseFloat(storedSaldo));  // Converte para float, caso já tenha um valor armazenado
    } else {
      setSaldo(0);  // Caso não exista saldo, define 0
    }
  }, []);

  return (
    <div className='limited-space-nav'>
      <div className='menu' ref={menuRef}>
        <Link className='link-style' to='/'>
          <div className='menu-item' onClick={closeMenu}>
            <i className="bi bi-border-all" id='t-icon'></i>
            <span>Todos</span>
          </div>
        </Link>
        <Link className='link-style' to='/'>
          <div className='menu-item' onClick={closeMenu}>
            <i className="bi bi-dice-6-fill" id='s-icon'></i>
            <span>Slots</span>
          </div>
        </Link>
        <Link className='link-style' to='/recharge'>
          <div className='menu-item' onClick={() => closeMenu()}>
            <i className="bi bi-piggy-bank-fill" id='d-icon'></i>
            <span>Depósito</span>
          </div>
        </Link>
        <Link className='link-style' to='/withdraw'>
          <div className='menu-item' onClick={() => closeMenu()}>
            <i className="bi bi-cash-coin" id='sa-icon'></i>
            <span>Saque</span>
          </div>
        </Link>
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
            <input className='number-input' type="text" placeholder='Número de telefone' ref={numberRef} onChange={numberVerification} value={numberChecked} />
            <i className="bi bi-eye" id='eye' onClick={() => showPassword()}></i>
            <input className='password-input' type="password" ref={passwordRef} placeholder='Senha' />
            {action === 'login' ? <span className='submit-form' onClick={() => handleLogin()}>Entrar</span> : <span className='submit-form' onClick={() => handleRegister()}>Cadastrar</span>}
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
      <Link to='/'>
        <img src="https://i.imgur.com/mraEE3y.png" alt="logo" />
      </Link>
      <div className='action-account'>
        {isLogged === false ? (
          <div className='login-register-btn'>
            <span className='style-login-btn' onClick={() => loginCaller()}>Entrar</span>
            <span className='style-login-btn' onClick={() => registerCaller()}>Registro</span>
          </div>
        ) : (
          <div className='saldo-div'>
            <span className="reload-icon">
              <Link to="/recharge">
                <i className="bi bi-plus-lg" id="adicionar-saldo"></i>
              </Link>
            </span>
            <span className='saldo-span'>R$ {saldo}</span>
            <i className="bi bi-arrow-clockwise" id='reload-saldo' onClick={girarReload}></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
