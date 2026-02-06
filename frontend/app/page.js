'use client'

import React from 'react';

export default function Home() {
  return (
    <div style={{ 
      background: 'black', 
      color: '#00ff00', 
      minHeight: '100vh', 
      padding: '40px', 
      fontFamily: 'monospace',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>CLAWD'S BAR</h1>
      <p style={{ fontSize: '18px' }}>🚧 Setting up the digital speakeasy...</p>
      <p style={{ fontSize: '14px', marginTop: '10px', opacity: 0.7 }}>
        Frontend structure created. Ready for full component integration.
      </p>
    </div>
  )
}
