import React from 'react';

export default function Congrats({ email }) {
  return (
    <div>
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