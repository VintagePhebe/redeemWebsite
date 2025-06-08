import React, { useState } from 'react';

export default function Login({ onSubmit }) {
  const [email, setEmail] = useState('');
  const valid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);

  function handleSubmit(e) {
    e.preventDefault();
    if (valid) onSubmit(email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="placeholder-img" style={{ fontFamily: 'Inter, Arial', color: '#fff', fontWeight: 900, fontSize: '3.5rem' }}>S</div>
      <h2>Accedi a Supercell Store</h2>
      <div className="secondary-text">
        Inserisci il tuo indirizzo e-mail, così ti invieremo un codice di verifica.
      </div>
      <input
        type="email"
        placeholder="Inserisci la tua e-mail"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <button type="submit" disabled={!valid}>ACCEDI</button>
      <button type="button" style={{ marginTop: 12 }}>INDIETRO</button>
      <a className="link" href="#">Vuoi registrare un Supercell ID?</a>
    </form>
  );
} 