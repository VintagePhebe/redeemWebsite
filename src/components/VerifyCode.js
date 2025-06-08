import React, { useState } from 'react';

export default function VerifyCode({ email, onSubmit, stepLabel }) {
  const [code, setCode] = useState('');
  const valid = /^\d{6}$/.test(code);

  function handleSubmit(e) {
    e.preventDefault();
    if (valid) onSubmit(code);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="placeholder-img" style={{ fontFamily: 'Inter, Arial', color: '#fff', fontWeight: 900, fontSize: '3.5rem' }}>S</div>
      <div className="step-label">Verifica</div>
      <h2>Quasi fatto!</h2>
      <div className="secondary-text">
        Un codice di verifica è stato inviato a <b>{email}</b>
      </div>
      <input
        type="text"
        placeholder="Inserisci il codice"
        value={code}
        onChange={e => setCode(e.target.value.replace(/\D/g, '').slice(0,6))}
        required
      />
      <button type="submit" disabled={!valid}>CONTINUA</button>
      <button type="button" style={{ marginTop: 12 }}>INDIETRO</button>
      <a className="link" href="#">Non hai ricevuto il codice?</a>
    </form>
  );
} 