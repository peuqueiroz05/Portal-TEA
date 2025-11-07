import React from 'react';

const SobreNos = () => {
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
        maxWidth: '800px',
        background: 'rgba(255, 255, 255, 0.9)',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}>
        <h2 style={{ marginBottom: '20px' }}>Sobre Nós</h2>
        <p style={{ marginBottom: '20px' }}>
          Bem-vindo ao <strong>PORTAL TEA</strong>! Somos um grupo dedicado a incentivar o apoio social e oferecer ajuda para cuidadores e pais de pessoas autistas. Entendemos que o cuidado de uma pessoa no espectro autista pode ser desafiador, e é por isso que buscamos criar um espaço seguro e acolhedor para que todos possam compartilhar suas experiências, buscar conselhos e expressar suas dificuldades sem julgamentos.
        </p>
        <p style={{ marginBottom: '20px' }}>
          No <strong>PORTAL TEA</strong>, acreditamos que a comunidade é fundamental para enfrentar os desafios diários, e nossa missão é conectar pais e cuidadores que vivem essa realidade, promovendo a troca de experiências e a solidariedade. Queremos que todos aqui se sintam apoiados e compreendidos, para que juntos possamos construir um ambiente de respeito, aprendizado mútuo e apoio contínuo.
        </p>
        <p>
          Nossa plataforma foi criada para oferecer recursos, informações e, acima de tudo, uma comunidade onde você pode ser ouvido. Este é um espaço onde os desafios e as conquistas de cuidar de uma pessoa autista podem ser discutidos livremente, ajudando a reduzir o estigma e a garantir que ninguém se sinta sozinho nesta jornada.
        </p>
      </div>
    </div>
  );
};

export default SobreNos;
