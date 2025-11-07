import React, { useState } from 'react';
import My_Gallery from '../Imagens/My_Gallery.png';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div 
      style={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        height: '100vh',
        padding: '20px',
       
        borderRadius: '8px' 
      }}
    >
      <img 
        src={My_Gallery} 
        alt="Imagem de Contato" 
        style={{ 
          width: '100px', 
          height: 'auto', 
          marginBottom: '20px' 
        }} 
      />
      <form 
        onSubmit={handleSubmit} 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '10px', 
          width: '100%', 
          maxWidth: '400px', 
          padding: '20px',
          background: '#89CFF0', 
          borderRadius: '8px', 
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' 
        }}
      >
        <h2 style={{ color: 'white', textAlign: 'center',  textShadow: '2px 2px 4px black'  }}>Contato</h2>
        <input
          type="text"
          name="nome"
          placeholder="Seu nome"
          value={formData.nome}
          onChange={handleChange}
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Seu email"
          value={formData.email}
          onChange={handleChange}
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          required
        />
        <textarea
          name="mensagem"
          placeholder="Sua mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          style={{ padding: '10px', minHeight: '100px', borderRadius: '4px', border: '1px solid #ccc' }}
          required
        />
        <button 
          type="submit" 
          style={{ 
            padding: '10px', 
            backgroundColor: '#0000FF',
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contato;
