import React from 'react';

const LoadingSpinner = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '50vh',
      gap: '2rem'
    }}>
      <div style={{
        width: '80px',
        height: '80px',
        border: '6px solid rgba(138, 43, 226, 0.2)',
        borderTop: '6px solid #8a2be2',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
      <p style={{
        fontFamily: "'Orbitron', sans-serif",
        fontSize: '1.5rem',
        color: '#ff00ff',
        fontWeight: '700',
        textShadow: '0 0 20px rgba(255, 0, 255, 0.6)',
        letterSpacing: '2px',
        animation: 'pulse 1.5s ease-in-out infinite'
      }}>
        Loading Pokémon...
      </p>
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
