import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Qrcode from '../../public/qrcode.webp'; // Seu QR code importado
import './Deposit.css';

const Deposit = () => {
  const paymentRef = useRef(null);
  const inputRef = useRef(null);

  const [depositValue, setDepositValue] = useState('');
  const [valueFinal, setValueFinal] = useState('');
  const [paymentCode] = useState('d83j72jd23d2378d2'); // Código fixo do QR code

  const copyCode = () => {
    inputRef.current.select();
    document.execCommand('copy');
    alert("QR CODE COPIADO!");
  };

  const isNumber = (e) => {
    const value = e.target.value;
    // Verifica se o valor inserido é numérico
    if (!isNaN(value)) {
      setDepositValue(value); // Atualiza o estado apenas se for numérico
    }
  };

  const handleDepositClick = () => {
    if (depositValue >= 10) {
      setValueFinal(depositValue); // Define o valor final a ser exibido acima do QR Code
      paymentRef.current.style.display = 'flex'; // Exibe o conteúdo do pagamento
    } else {
      alert('O valor mínimo para depósito é R$ 10');
    }
  };

  const handleQRCodeClick = () => {
    // Atualiza o localStorage com o valor 360 quando o QR Code for clicado
    localStorage.setItem('saldo', '360');
    alert('Valor de depósito atualizado para 360!');
  };

  return (
    <div className='deposit-div'>
      <Link to="/">
        <i className="bi bi-arrow-left" id='back-deposit'></i>
      </Link>
      <div className='back-title'>
        <span className='deposit-title'>Depósito</span>
      </div>
      <div className='methods'>
        <span>PIX</span>
      </div>
      <div className='value-recharge'>
        <input
          className='input-deposit-value'
          type="text"
          onChange={isNumber}
          value={depositValue}
          placeholder="Valor"
        />
        {depositValue < 10 ? <span className='aviso-minimo' style={{marginBottom: '20px'}}>min. 10</span> : (<input hidden />)}
        <div>
          <br />
          <input type="checkbox" id="termos-condicoes" />
          <label htmlFor="termos-condicoes" className='esqueci-a-senha'>
            Aceito participar de promoções<br />e bonificação aplicados neste depósito.
          </label>
        </div>
        <span className='finish-deposit-btn' onClick={handleDepositClick}>Depósito</span>
      </div>
      <div className='payment-processed' ref={paymentRef} style={{ display: 'none' }}>
        <span>R$ {valueFinal}</span>
        <img
          className='img-qr-code'
          style={{ width: '150px' }}
          src={Qrcode}
          alt="Imagem Base64"
          onClick={handleQRCodeClick}  // Adiciona o manipulador de clique aqui
        />
        <span className='copiar-qr' onClick={copyCode}>Copiar QR CODE</span>
        <input type="text" style={{ marginBottom: '40px' }} value={'00020101021226830014BR.GOV.BCB.PIX2561qrcodespix.sejaefi.com.br/v2/38d377954e2a43e091c2d70978397ff05204000053039865802BR5905EFISA6008SAOPAULO62070503***63042890'} ref={inputRef} readOnly />
      </div>
    </div>
  );
};

export default Deposit;
