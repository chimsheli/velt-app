import React from 'react';

export default function DashboardPage() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundImage: 'url("/assets/DASHBOARD.png")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      {/* Healing Room butonu */}
      <button
        onClick={() => console.log("Healing Room")}
        style={{
          position: 'absolute',
          top: '30%',
          left: '30%',
          width: '120px',
          height: '120px',
          background: 'transparent',
          border: '2px solid white',
          borderRadius: '12px',
          cursor: 'pointer',
        }}
      ></button>

      {/* Love Room butonu */}
      <
