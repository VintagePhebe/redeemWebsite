import React from 'react';

export default function Congrats({ email }) {
  return (
    <div>
      <div className="placeholder-img" style={{ fontFamily: 'Inter, Arial', color: '#fff', fontWeight: 900, fontSize: '3.5rem' }}>S</div>
      <h2>Complimenti!</h2>
      <div className="secondary-text" style={{ marginBottom: 24 }}>
        Il tuo premio è stato inviato a: <b>{email}</b>
      </div>
      <div style={{ fontSize: '2.5rem', color: '#3bb4e5', marginBottom: 8 }}>🎉</div>
      <div style={{ color: '#222', fontSize: '1.2rem' }}>
        Goditi il tuo oggetto in-game!
      </div>
    </div>
  );
} 