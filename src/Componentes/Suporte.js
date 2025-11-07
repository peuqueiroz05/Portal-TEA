import React, { useState } from 'react';

const Suporte = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [sucesso, setSucesso] = useState(false);
  const [erro, setErro] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErro('');

    if (nome.trim() && email.trim() && mensagem.trim()) {
      console.log({ nome, email, mensagem });
      setSucesso(true);
      setNome('');
      setEmail('');
      setMensagem('');
    } else {
      setErro('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.titulo}>Suporte</h2>
      <p style={styles.subtitulo}>Envie suas dúvidas ou problemas para nossa equipe.</p>

      {sucesso && (
        <div style={styles.sucesso}>Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.</div>
      )}
      {erro && <div style={styles.erro}>{erro}</div>}

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.campo}>
          <label style={styles.label}>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.campo}>
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.campo}>
          <label style={styles.label}>Mensagem:</label>
          <textarea
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            style={styles.textarea}
            rows="6"
          />
        </div>

        <button type="submit" style={styles.botao}>Enviar</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '650px',
    margin: '0 auto',
    padding: '40px 20px',
    background: 'linear-gradient(135deg, #000000, #001f3f)',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    fontFamily: 'DynaPuff, sans-serif',
    color: '#fff'
  },
  titulo: {
    fontSize: '2rem',
    color: '#fff',
    textAlign: 'center',
    marginBottom: '0.5rem',
  },
  subtitulo: {
    fontSize: '1.1rem',
    color: '#fff',
    textAlign: 'center',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  campo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  label: {
    fontSize: '1rem',
    color: '#fff',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  textarea: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  botao: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '12px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease',
  },
  sucesso: {
    backgroundColor: '#e6ffed',
    color: '#28a745',
    padding: '10px',
    borderRadius: '5px',
    textAlign: 'center',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  erro: {
    backgroundColor: '#ffe6e6',
    color: '#e60000',
    padding: '10px',
    borderRadius: '5px',
    textAlign: 'center',
    marginBottom: '20px',
  },
};

export default Suporte;
