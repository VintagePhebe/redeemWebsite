import React, { useState, useRef } from 'react';

export default function VerifyCode({ email, onSubmit, stepLabel }) {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  const valid = code.every(digit => /^\d$/.test(digit));

  function handleChange(index, value) {
    if (value.length > 1) return;
    
    const newCode = [...code];
    newCode[index] = value.replace(/\D/g, '');
    setCode(newCode);

    // Move to next input if a digit was entered
    if (value && index < 5) {
      inputRefs[index + 1].current.focus();
    }
  }

  function handleKeyDown(index, e) {
    // Move to previous input on backspace if current input is empty
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (valid) onSubmit(code.join(''));
  }

  return (
    <form onSubmit={handleSubmit}>
      <img 
        src="/redeemWebsite/images/Mandy_Skin-Carnaval.webp" 
        alt="Mandy Skin" 
        style={{ 
          width: '110px',
          height: '110px',
          objectFit: 'cover',
          borderRadius: '20px',
          margin: '0 auto 24px auto',
          boxShadow: '0 2px 8px rgba(0,0,0,0.10)'
        }}
      />
      <div className="step-label">Verifica</div>
      <h2>Quasi fatto!</h2>
      <div className="secondary-text">
        Un codice di verifica è stato inviato a <b>{email}</b>
      </div>
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '18px' }}>
        {code.map((digit, index) => (
          <input
            key={index}
            ref={inputRefs[index]}
            type="text"
            maxLength={1}
            value={digit}
            onChange={e => handleChange(index, e.target.value)}
            onKeyDown={e => handleKeyDown(index, e)}
            style={{
              width: '40px',
              height: '40px',
              textAlign: 'center',
              fontSize: '1.2rem',
              padding: '0',
              borderRadius: '8px',
              border: '1px solid #e0e0e0',
              boxShadow: '0 1px 4px #0001'
            }}
          />
        ))}
      </div>
      <button type="submit" disabled={!valid}>CONTINUA</button>
      <button type="button" style={{ marginTop: 12 }}>INDIETRO</button>
      <a className="link" href="#">Non hai ricevuto il codice?</a>
    </form>
  );
} 