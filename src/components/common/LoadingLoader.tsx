import React from 'react';

const LoadingLoader: React.FC = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    background: '#17506f',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 9999,
  }}>
    <video
      src="/Loading.webm"
      autoPlay
      muted
      style={{ width: 300, height: 300, objectFit: 'contain' }}
    />
  </div>
);

export default LoadingLoader; 