import React, { useRef, useState } from 'react';
import {Link} from 'react-router-dom'
import {suitpay} from '../suitpay'
import './Deposit.css';

const Deposit = () => {
  const paymentRef = useRef(null)
  const inputRef = useRef(null)

  const [depositValue, setDepositValue] = useState('');
  const [valueFinal, setValueFinal] = useState('');
  const [base64String, setBase64String] = useState('');
  const [paymentCode, setPaymentCode] = useState('');

  const copyCode = () => {
    inputRef.current.select();
    document.execCommand('copy');
    alert("QR CODE COPIADO !")
  }

  const paymentProcess = (final) => {
    const idTransation = Math.floor(1000 + Math.random() * 9000);
    const hoje = new Date();
    const amanha = new Date(hoje);
    amanha.setDate(hoje.getDate() + 1);
    const formattedDate = `${amanha.getFullYear()}-${String(amanha.getMonth() + 1).padStart(2, '0')}-${String(amanha.getDate()).padStart(2, '0')}`;
    suitpay.post('/api/v1/gateway/request-qrcode', {
      "requestNumber": String(idTransation),
      "dueDate": formattedDate,
      "amount": Number(final),
      "discountAmount": 0.0,
      "client": {
          "name":"Robson Luis Leite Junior",
          "document":"133.166.609-09",
          "phoneNumber": "47996579387",
          "email": "robsonluis2222@gmail.com"
      }
  })
  .then(response => {
      paymentRef.current.style.display = 'flex'
      setValueFinal(final)
      setBase64String(response.data.paymentCodeBase64)
      setPaymentCode(response.data.paymentCode)
      console.log(response.data)
  })
  .catch(error => {
      console.log("erro: " + error)
  })
  }

  const isNumber = (e) => {
    const value = e.target.value;
    // Verifica se o valor inserido é numérico
    if (!isNaN(value)) {
      setDepositValue(value); // Atualiza o estado apenas se for numérico
    }
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
        {depositValue < 10 ? <span className='aviso-minimo'>min. 10</span> : (<input hidden />)}
        <span className='finish-deposit-btn' onClick={() => paymentProcess(depositValue)}>Depósito</span>
      </div>
      <div className='payment-processed' ref={paymentRef}>
        <span>R$ {valueFinal}</span>
        <img className='img-qr-code' src={`data:image/png;base64,${base64String}`} alt="Imagem Base64" />
        <span className='copiar-qr' onClick={() => copyCode()}>Copiar QR CODE</span>
        <input type="text" value={paymentCode} ref={inputRef} />
      </div>
    </div>
  );
};

export default Deposit;
