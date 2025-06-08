import React from 'react';

export default function ProgressBar({ step, total }) {
  const percent = (step / total) * 100;
  return (
    <div className="progress-bar-bg">
      <div
        className="progress-bar-slider"
        style={{ 
          left: `calc(${percent}% - 12px)`,
          background: '#666'
        }}
      />
    </div>
  );
} 