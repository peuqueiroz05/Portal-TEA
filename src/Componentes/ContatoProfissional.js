import React from 'react';

const ContatoProfissional = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      padding: '40px',
      
      textAlign: 'center',
      color: '#333',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    }}>
      <div style={{
         background: 'linear-gradient(135deg, #a8e063, #56ab2f)',
        maxWidth: '800px',
        background: 'rgba(255, 255, 255, 0.9)',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}>
        <h2 style={{ marginBottom: '20px' }}>Contato Profissional</h2>
        <p style={{ marginBottom: '20px' }}>
      <strong>PORTAL TEA</strong>! 
        </p>
        <p style={{ marginBottom: '20px' }}>
           <strong>Atendimento transdisciplinar especializado em autismo para crianças e adolescentes.</strong>
        </p>
        <p>
        81 988709440 - Dr. Pedro, Especialista com pessoas no espectro autista.
        </p>
        <p> 81 940028922 - Dr. Mike, Especialista em neurologia e psiquiatra certificado.
        </p>
        <p>81 986640808 - Dra. Maria Luiza, especialista em Psicologia Infantil.</p>
      </div>
    </div>
  );
};

export default ContatoProfissional;
